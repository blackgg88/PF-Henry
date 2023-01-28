import React, { useState } from 'react'
import like from '../../../assets/foro/like-red.png';
import icondelete from '../../../assets/foro/trash-delete-remove-clean-svgrepo-com.svg'


interface User{
  username: string;
  userName: string;
}

interface Comment{
  _id: string;
  author: string;
  content: string;
  likes: [];
  onDeleteComment: any;
  email: string;
}

export default function Foro_comments({author, likes, _id, content, onDeleteComment, email}: Comment){
  console.log(author);

  
  
  return (
    <div className='comments_Container'>
      <div className='comments_headerDiv'>
        <h3>{author}</h3>
      </div>
      <div className='comments_contentDiv'>
        <p>{content}</p>
      </div>
      <hr/>
      <div className='comments_buttonsDiv'>
        <img onClick={()=> onDeleteComment(_id, email)} className='icondelete' src={icondelete} alt="delete" />
        <div className='comments_likesIDE'>
          <img src={like} alt="like" />
          <p>{likes.length}</p>
        </div>
      </div>
    </div>
  )
}
