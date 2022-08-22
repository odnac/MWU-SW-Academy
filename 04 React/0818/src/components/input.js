import { useRef, useImperativeHandle, forwardRef } from "react"

const Input = forwardRef((_, ref) => {
    const inputRef = useRef()
    useImperativeHandle(ref, () => ({
        clear: () => {
            inputRef.current.value = ''
        },
        focus: () => {
            inputRef.current.focus()
        }
    }))

    return (
        <>
            Input: <input ref={inputRef}/>
        </>
    )
})

export default Input