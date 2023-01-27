import http from '../http-common'

const getAll = () =>{
    return http.get("/member")
}

const get = (id:number)=>{
    return http.get(`member/${id}`)
}

const create = (data:any) =>{
    return http.post("/member", data)
}

const update = (id:number,data:JSON) =>{
    return http.post(`/member${id}`, data)
}

const remove = (id:number) =>{
    return http.delete(`member/${id}`)
}

const ArtriService = {
    getAll,
    get,
    create,
    update,
    remove
}

export default ArtriService