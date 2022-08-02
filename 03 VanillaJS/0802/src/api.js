export const API_END_POINT = 'https://mwu.roto-cat-api.programmers.co.kr'

export const request = async(url)=>{
    try{
        const res = await fetch(`${API_END_POINT}${url}`)

        if(!res.ok){
            throw new error('API ERROR')
        }

        return await res.json()

    }catch(e){
        alert(e.message)
    }
}