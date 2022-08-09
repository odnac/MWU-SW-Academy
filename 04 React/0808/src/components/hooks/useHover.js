import { useCallback, useEffect, useRef, useState,  } from "react"

const useHover = () => {
    const [state, setState] = useState(false)
    const ref = useRef(null)

    const handleMouseOver = useCallback(() => setState(true), [])
    const handleMouseOut = useCallback(() => setState(false), [])

    useEffect(() => {
        const element = ref.current
        if(element){
            element.addEventListener('mouseover', handleMouseOver)
            element.addEventListener('mouseout', handleMouseOut)

            return () => {
                element.removeEventListener("mouseover", null)
                element.removeEventListener("mouseout", null)
            }
        }
    }, [ref, handleMouseOut, handleMouseOver])

    return [ref, state]
}

export default useHover