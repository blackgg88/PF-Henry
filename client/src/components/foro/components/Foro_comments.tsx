import React from 'react'

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
    <div>
      <p>{author}</p>
      <p>{likes.length}</p>
      <p>{content}</p>
    </div>
  )
}
