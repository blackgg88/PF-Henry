import { API_URL } from "../../config";

export const putCommentsPosts = async (body: any, id: string, path:string) => {
  return await fetch(`${API_URL}/${path}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

/*

  {
    "email":"63c6f0c6f46e034dfcbeeae2"
    "content":"Imaginemos que aqui hay una descripcion",
  }
  
*/
