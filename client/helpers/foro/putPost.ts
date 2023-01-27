import { API_URL } from '../../config'

export const putPost = async (body: any, id: string) => {
  return await fetch(`${API_URL}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
}

/*
  {
      "email":"63c6f0c6f46e034dfcbeeae2"
      "title":"El primer Post de Kevincito!",
      "content":"Imaginemos que aqui hay una descripcion",
      "image"??:"https://m.media-amazon.png", 
  }
*/