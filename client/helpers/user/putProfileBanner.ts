import { API_URL } from "../../config";

export const putProfileBanner = async (email: string, banner: string)=> {
    console.log( { email, banner})
    
    return await fetch(`${API_URL}/users/banner`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            banner: banner
        }),
      })
}

/*
    {
        picture: ""
        email: ""
    }
*/
