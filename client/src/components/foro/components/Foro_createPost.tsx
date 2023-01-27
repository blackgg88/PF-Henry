import React from 'react'
import { useForoHome } from "../hooks/useForoHome";

export default function Foro_createPost(){

    const [
        form,
        allPost,
        { handlerLike, handlerChangePost, submitPost, onDeletePost }
      ]: any = useForoHome()

  return (
    <div className='foro_create_overlay'>
      <div className='foro_create_containere'>
        
     
        <form onSubmit={submitPost}>
        <label htmlFor="author">Author</label>
        <input
          placeholder="author"
          name="author"
          id="author"
          onChange={(e) => handlerChangePost(e)}
          type="text"
          value={form.author}
        />
        <br />
        <hr />
        <label htmlFor="title">Title</label>
        <input
          placeholder="title"
          name="title"
          id="title"
          onChange={(e) => handlerChangePost(e)}
          type="text"
          value={form.title}
        />
        <br />
        <hr />
        <label htmlFor="content">Content</label>
        <input
          placeholder="content"
          name="content"
          id="content"
          onChange={(e) => handlerChangePost(e)}
          type="text"
          value={form.content}
        />
        <br />
        <hr />
        <label htmlFor="image">Image</label>
        <input
          placeholder="image"
          name="image"
          id="image"
          onChange={(e) => handlerChangePost(e)}
          type="text"
          value={form.image}
        />
        <hr />
        <br />
        <button>Post</button>
      </form>
      </div>
    </div>
  )
}
