import useAsync from "../hooks/useAsync"

export default {
    title: 'Hook/useAsync'   
}

const asyncReturnValue = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Success')
        }, 1000)
    })
}

const asyncReturnError = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            resolve('Error')
        }, 1000)
    })
}

export const Success = () => {
    const state = useAsync(async () => {
        return await asyncReturnValue()
    }, [])

    return (
        <div>
            <div>useAsyncFn 테스트</div>
            <div>{JSON.stringify(state)}</div>
        </div>
    )
}

export const Error = () => {
    const state = useAsync(async () => {
        return await asyncReturnError()
    }, [])

    return (
        <div>
            <div>useAsyncFn 테스트</div>
            <div>{JSON.stringify(state)}</div>
        </div>
    )
}