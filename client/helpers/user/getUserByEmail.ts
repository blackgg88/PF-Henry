import { API_URL } from "../../config";

export const getUserByEmail = async (email: string)=> {
    const user =  fetch(`${API_URL}/users/email/${email}`)
    .then( res => res.json())
    .then(res => res)

    return await user
}