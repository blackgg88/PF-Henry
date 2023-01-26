import React from 'react'
import likeLogo from '../../../assets/foro/like-red.png'
import commentLogo from '../../../assets/foro/comment.png'

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
    comments: string
}
// : React.FC
export function Foro_card ({id, title, content, likes, img, author, comments, userId, post, onDeletePost}: Foro_Card) {
  return (
    <div className='foro_card_Container' key={id}>
      <div className='foro_card_authorSide'>
        <p>{author}</p>
        <img className='foro_card_buttonEdit' src={"https://cdn.iconscout.com/icon/free/png-256/more-horizontal-3114524-2598156.png"} alt="edit" />
      </div>
      <div className='foro_card_titleSide'>
        <h3>{title}</h3>
      </div>
      {

      }
      <div className='foro_card_contentSide'>
        <p>{content}</p>
      </div>

      {
        img&&<div className='foro_card_imagenSide'>
            <img src={img} alt={title} />
          </div>
        }
      
      <div className='foro_card_socialContainer'>
        <p>{likes}</p>
          
        <img className='foro_card_buttonLike' src={likeLogo} alt="like" />
        <p>{comments}</p>
        <img className='foro_card_buttonComment' src={commentLogo} alt='comment' />
        
        {
          /*
          <button onClick={() => onDeletePost(id, userId)}> Borrar </button>
          <button>Editar</button>

          */
        }
      </div>
      
      {/* <p>{post  .comments}</p> */}
      
    </div>
  )
}
