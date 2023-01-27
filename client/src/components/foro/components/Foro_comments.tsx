import React from 'react'
import like from '../../../assets/foro/like-red.png'

interface User{
  username: string;
  userName: string;
}

interface Comment{
  _id: string;
  author: string;
  content: string;
  likes: [];
}

export default function Foro_comments({author, likes, _id, content}: Comment){
  console.log(author);
  
  return (
    <div className='comments_Container'>
      <div className='comments_headerDiv'>
        <h3>{author}</h3>
      </div>
      <div className='comments_contentDiv'>
        <p>{content}</p>
      </div>
      <div className='comments_buttonsDiv'>
        <p>{likes.length}</p>
        <img src={like} alt="like" />
      </div>
    </div>
  )
}
