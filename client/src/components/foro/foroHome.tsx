import { useForoHome } from "./hooks/useForoHome";

interface ForoInterface {
  form: object,
  allPost: [],
  functions: object
}

export default function ForoHome() {
  
  const [form, allPost, editMode, { handlerLike, handlerChangePost, submitPost, onDeletePost }]: any = useForoHome()

  return (
    <>
      <h1>Foro</h1>
      <button onClick={(e) => handlerLike}>Like Toggle</button>

      <br />
      <hr />

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

      <div className="Posts">
        {allPost?.reverse().map((post: any) => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <img src={post.image} alt={post.title} />
            <p>{post.author.userName}</p>
            <p>{post.likes.length}</p>
            <button
              onClick={() => onDeletePost(post)}
            >
              {" "}
              Borrar
            </button>
            <button>Editar</button>
            
            {/* <p>{post  .comments}</p> */}
            
          </div>
        ))}
      </div>
    </>
  );
}
