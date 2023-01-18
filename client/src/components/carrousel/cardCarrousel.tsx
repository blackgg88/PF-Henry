import React from 'react'

interface cards {
    title: string,
    content: string
}

const Card = ({title, content}:cards) => {
  return (
    <div className='card'>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>)
}

export default Card