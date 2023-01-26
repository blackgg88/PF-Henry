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
    <div className="foro_home_container">
      {/*<Foro_createPost />*/}
      <div className="foro_posts_container">
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
            comments={post.comments.length}
            likes={post.likes.length}
            onDeletePost={onDeletePost}
          />
      
        ))}
      </div>
      <div className="foro_menuTags_container">
        <h1>barras Izq</h1>
      </div>
    </div>
  );
}
