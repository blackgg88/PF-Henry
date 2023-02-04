import { API_URL } from "../../config";

export const getAllPostUser = async (email: string)=> {
    const user =  fetch(`${API_URL}/posts/author/${email}`)
    .then( res => res.json())
    .then(res => res)

    return await user
}