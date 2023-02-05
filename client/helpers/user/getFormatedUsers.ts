import { API_URL } from "../../config";

export const getFormatedUsers = async ()=> {
    const user =  fetch(`${API_URL}/users/list`)
    .then( res => res.json())
    .then(res => res)
    return await user
}