import { useMutation, gql } from "@apollo/client"
import styled from "@emotion/styled"
import { useCallback, useState } from "react"

const Form = styled.form`
    width: 400px;
`

const Input = styled.input`
    width: 332px;
    height: 32px;
    padding: 4px 6px;
    border-radius: 8px;
    border: 2px dolid black;
    box-sizing: border-box;
`

const SubmitButton = styled.button`
    width: 60px;
    height: 32px;
    padding: 4px 6px;
    margin-left: 8px;
    color: white;
    border-radius: 8px;
    border: none;
    background-color: black;
    box-sizing: border-box;
    cursor: pointer;
`

const CREATE_TASK = gql`
    mutation CreateTask($content: String!) {
        createTask(data: { content : $content, complete: false}) {
            data {
                id
            }
        }
    }
`

export const NewTaskForm = () => {
    const [task, setTask] = useState('')
    const [createTask] = useMutation(CREATE_TASK)

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        createTask({ variables: { content : task }})
        setTask('')
    }, [createTask, task])

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" value={task} placeholder="Add a task" onChange={(e) => setTask(e.target.value)}/>
            <SubmitButton>Add</SubmitButton>
        </Form>
    )
}