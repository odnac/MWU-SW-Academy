export const API_END_POINT = 'https://mwu.roto-todo-api.programmers.co.kr'

export const request = async (url, options = {}) => {
    try {
        const res = await fetch(`${API_END_POINT}${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(res.ok) { 
            const json = await res.json()    
            return json
        }
        throw new Error('API 호출 오류')
    } catch(e) {
        console.log(e.message)
    }
}