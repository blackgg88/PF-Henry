import { API_URL } from "../../../config";

export const deletePosts = async (body: any, ruta: string) => {
  return await fetch(`${API_URL}/posts`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  // return await fetch(`${API_URL}/${ruta}`, {
  //   method: "DELETE",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(body),
  // });
};


/*

    {
      email
      idPost
    }

*/