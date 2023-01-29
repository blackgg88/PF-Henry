import { API_URL } from "../../config";

export const postCommentsPosts = async (body: any, path: string) => {
  return await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
};

/*

  post = {
    "email":"63c6f0c6f46e034dfcbeeae2"
    "title":"El primer Post de Kevincito!",
    "content":"Imaginemos que aqui hay una descripcion",
    "image"??:"https://m.media-amazon.png", 
  },
  
  comment = {
    "content": "Me encanto tu post!",
    "post": "63d1f32e866456f173d36227",
    "email": "hola@gmail.com",
  }
  

*/
