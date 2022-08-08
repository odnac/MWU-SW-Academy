import React, { useEffect } from "react"

const Input = React.forwardRef((_, ref) => {

    useEffect(() => {
        console.log(ref.current)
    }, [ref])

    return (
        <>
            Input: <input ref={ref}/> 
        </>
    )
})

export default Input