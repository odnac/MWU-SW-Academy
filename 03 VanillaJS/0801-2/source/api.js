export const API_END_POINT = 'https://kdt.roto.codes'

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