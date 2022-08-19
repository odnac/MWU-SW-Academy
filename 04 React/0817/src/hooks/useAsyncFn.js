import { useState } from "react"

const useAsyncFn = (fn, deps) => {
    const lastCallId = useRef(0)
    const [state, setState] = useState({ isLoading: false })

    const callback = useCallback((...args) => {
        const callId = ++lastCallId.current

        if(!state.isLoading) {
            setState({...state, isLoading: true})
        }

        return fn(...args).then((value) => {
            callId === lastCallId.currnet && setState({value, isLoading: false})
            return value
        }, 
        (error) => {
            callId === lastCallId.currnet && setState({error, isLoading: false})
            return error
        })
    }, deps)

    return [state, callback]
}

export default useAsyncFn