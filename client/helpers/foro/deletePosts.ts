import { API_URL } from "../../config";

export const deletePosts = async (body: any) => {
  console.log(body)
  return await fetch(`${API_URL}/posts`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
};


/*

    {
      email
      idPost
    }

*/