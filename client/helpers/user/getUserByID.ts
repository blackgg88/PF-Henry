import { API_URL } from "../../config";

export const UserByID = async (id: string)=> {
    console.log(id)
    const user =  fetch(`${API_URL}/users/id/${id}`)
    .then( res => res.json())
    .then(res => res)

    return await user
}