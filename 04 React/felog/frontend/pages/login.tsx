import { Button, Container, Divider, Heading, Input, Stack } from "@co-design/core"
import React, { useCallback } from 'react'
import { useToggle } from "@co-design/hooks"
import { gql, useMutation } from "@apollo/client";
import nookies from 'nookies'
import { useRouter } from "next/router";
import { NextPageContext } from "next";

interface FormElements extends HTMLFormElement {
    username: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
}

const LOGIN = gql`
    mutation Login( $email: String!, $password: String!) {
        login(input: { identifier: $email, password: $password }) {
            jwt
        }
    }
`

// 로그인 상태일 때 회원가입을 누르면 루트페이지로 이동
export const getServerSideProps = async (ctx: NextPageContext) => {
    const { token } = nookies.get(ctx)
    if(token) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }

    return { props: {} }
}

const LogIn = () => {
    const [loading, toggleLoading] = useToggle()
    const [login] = useMutation(LOGIN)
    const router = useRouter()
    const handleSubmit = useCallback(async (e: React.FormEvent<FormElements>) =>{
        e.preventDefault()
        toggleLoading(true)
        const elements: FormElements = e.currentTarget
        const email = elements.email.value
        const password = elements.password.value

        const result = await login({ variables: { email, password }})
        nookies.set(null, 'token', result.data.login.jwt, { path: '/' })
        toggleLoading(false)
        router.push("/")
    }, [toggleLoading, router, login])

    return (
        <Container size="xsmall" padding={16} co={{ marginTop: 16 }}>
            <Heading strong level={3} align="center">Login</Heading>
            <Divider />
            <form onSubmit={handleSubmit}>
                <Stack>
                    <Input type="email" placeholder="Email" name="email" />
                    <Input type="password" placeholder="Password" name="password" />
                    <Button type="submit" loading={loading}>Login</Button>
                </Stack>
            </form>
        </Container>
    )
}

export default LogIn