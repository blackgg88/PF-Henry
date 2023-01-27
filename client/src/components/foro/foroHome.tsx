import { useForoHome } from "./hooks/useForoHome";
import  { Foro_card }  from "./components/Foro_card";
import  Foro_createPost  from "./components/Foro_createPost";
//------- USUARIO HELPER ----------
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { useAuth0 } from '@auth0/auth0-react';
import { userInterface } from '../../Redux/slice/user/user.slice';
//---------------
interface ForoInterface {
  form: object,
  allPost: [],
  functions: object
}

export default function ForoHome() {
  const { user } = useAuth0();
  const userByBd: userInterface = useAppSelector((state) => state.userReducer.userState);
  
  const [
    form,
    allPost,
    { handlerLike, handlerChangePost, submitPost, onDeletePost }
  ]: any = useForoHome()

  console.log(user)

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
            author={post.author.userName || post.author.username}
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
