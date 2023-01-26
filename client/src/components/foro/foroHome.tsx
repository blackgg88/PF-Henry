import { useForoHome } from "./hooks/useForoHome";
import  { Foro_card }  from "./components/Foro_card";
import  Foro_createPost  from "./components/Foro_createPost";
interface ForoInterface {
  form: object,
  allPost: [],
  functions: object
}

export default function ForoHome() {
  
  const [
    form,
    allPost,
    { handlerLike, handlerChangePost, submitPost, onDeletePost }
  ]: any = useForoHome()

  return (
    <>
      <h1>Foro</h1>
      {/* <button onClick={(e) => handlerLike()}>Like Toggle</button> */}

      <br />
      <hr />

      <Foro_createPost />

      

      <div className="Posts">
        {allPost?.map((post: any) => (
          <Foro_card 
            key={post._id}
            id={post._id}
            title={post.title}
            content={post.content}
            img={post.image}
            post={post}
            author={post.author.userName}
            userId={post.author._id}
            likes={post.likes.length}
            onDeletePost={onDeletePost}
          />
        
          


         
          
          // <div key={post._id}>
          //   <h3>{post.title}</h3>
          //   <p>{post.content}</p>
          //   <img src={post.image} alt={post.title} />
          //   <p>{post.author.userName}</p>
          //   <p>{post.likes.length}</p>
          //   <button
          //     onClick={() => onDeletePost(post)}
          //   >
          //     {" "}
          //     Borrar
          //   </button>
          //   <button>Editar</button>
            
          //   {/* <p>{post  .comments}</p> */}
            
          // </div>
        ))}
      </div>
    </>
  );
}
