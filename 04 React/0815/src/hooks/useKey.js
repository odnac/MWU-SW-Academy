import { useCallback, useEffect } from "react"

const useKey = ({event = 'keydown', targetKey, hanlder}) => {
    const handleKey = useCallback(({ key }) => {
        if (key === targetKey) {
            hanlder()
        }
    }, [targetKey, hanlder])

    useEffect(() => {
        window.addEventListener(event, handleKey)

        return () => {
            window.removeEventListener(event, handleKey)
        }
    })
}

export default useKey