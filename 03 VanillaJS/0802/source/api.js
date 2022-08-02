const API_END_POINT = 'https://mwu.roto-cat-api.programmers.co.kr'

export const request = async () => {
    try {
        const res = await fetch(`${API_END_POINT}${url}`)

        if( !res.ok ) {
            throw new Error('API Call Fail')
        }

        return await res.json()
    } catch(e) {
        alert(e.message)
    }
}