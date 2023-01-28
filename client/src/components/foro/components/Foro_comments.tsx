import React, { useState } from 'react'
import like from '../../../assets/foro/like-red.png';
import icondelete from '../../../assets/foro/trash-delete-remove-clean-svgrepo-com.svg';
import moment from 'moment';


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
  created: Date
}

export default function Foro_comments({author, likes, _id, content, onDeleteComment, email, created}: Comment){
  console.log(author);

  
  
  return (
    <div className='comments_Container'>
      <div className='comments_headerDiv'>
        <h3>{author}</h3>
        <h5>{moment(created).fromNow()}</h5>
      </div>
      <div className='comments_contentDiv'>
        <p>{content}</p>
      </div>
      <hr/>
      <div className='comments_buttonsDiv'>
        <div className='comments_Button_left'>
          <img onClick={()=> onDeleteComment(_id, email)} className='icondelete' src={icondelete} alt="delete" />
        </div>
        <div className='comments_Button_right'>
          <img src={like} alt="like" />
          <p>{likes.length}</p>
        </div>
      </div>
    </div>
  )
}
