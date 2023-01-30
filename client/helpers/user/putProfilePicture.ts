import { API_URL } from "../../config";

export const putProfilePicture = async (email: string, picture: string)=> {
    
    return await fetch(`${API_URL}/users/img`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            picture
        }),
      })
}

/*
    {
        picture: ""
        email: ""
    }
*/
