import React from 'react'

interface Foro_Card{
    id: string;
    title: string;
    post: string
    content: string;
    img: string;
    likes: string;
    author: string;
    onDeletePost: any;
    userId:string
}
// : React.FC
export function Foro_card ({id, title, content, likes,img, author, userId, post, onDeletePost}: Foro_Card) {
  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>{content}</p>
      <img src={img} alt={title} />
      <p>{author}</p>
      <p>{likes}</p>
      <button onClick={() => onDeletePost(id, userId)}> Borrar </button>
      <button>Editar</button>
      
      {/* <p>{post  .comments}</p> */}
      
    </div>
  )
}
