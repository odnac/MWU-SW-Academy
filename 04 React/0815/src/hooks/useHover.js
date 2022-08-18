import { useCallback, useEffect, useRef, useState } from "react"

const useHover = () => {
    const [state, setState] = useState(false)
    const ref = useRef(null)

    const handleMouseOver = useCallback(() => setState(true), []);
    const handleMouseOut = useCallback(() => setState(true), []);

    useEffect(() => {
        const element =ref.current;
        if(!element) return;

        element.addEventListener('mouseover', handleMouseOver)
        element.addEventListener('mouseout', handleMouseOut)

        return () => {
            element.removeEventListener('mouseover', handleMouseOver)
            element.removeEventListener('mouseout', handleMouseOut)
        }
    }, [handleMouseOver, handleMouseOut]);

    return [ref, state]
}

export default useHover