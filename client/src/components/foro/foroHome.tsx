import { useForoHome } from "./hooks/useForoHome";
import { Foro_card } from "./components/Foro_card";
import Foro_createPost from "./components/Foro_createPost";
//------- USUARIO HELPER ----------
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
//---------------
interface ForoInterface {
  form: object;
  allPost: [];
  functions: object;
}

interface editPost {
  content: string;
  id: string;
}

export default function ForoHome() {
  const { user } = useAuth0();
  const [imageOpen, setImageOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [editPost, setEditPost] = useState<editPost>({
    content: "",
    id: "",
  });

  const [
    form,
    allPost,
    {
      likeHandler,
      handlerSubmit,
      handlerChangePost,
      handlerSubmitEdit,
      onDeletePost,
    },
  ]: any = useForoHome();

  const editHandlerModal = (id: string, content: string) => {
    setEditOpen(!editOpen);
    setEditPost({
      ...editPost,
      id,
      content,
    });
  };

  return (
    <div className='foro_home_container'>
      {editOpen && (
        <Foro_createPost
          onSave={handlerSubmitEdit}
          id={editPost.id}
          content={editPost.content}
          onClose={setEditOpen}
        />
      )}
      <div className='foro_posts_container'>
        <div className='foro_posts_creator'>
          <div className='foro_posts_inputsSide'>
            <img src={user?.picture} alt='profilePic' />
            <input
              value={form.title}
              onChange={handlerChangePost}
              name='title'
              placeholder='Title'
              type='text'
            />
          </div>
          <div className='foro_posts_secondInput'>
            <textarea
              value={form.content}
              onChange={handlerChangePost}
              name='content'
              className='foro_post_textAREA'
              placeholder='Description'
            />
            {imageOpen && (
              <input
                value={form.image}
                onChange={handlerChangePost}
                name='image'
                placeholder='Image'
                type='text'
              />
            )}
          </div>
          <hr />
          <div className='foro_posts_buttonSide'>
            <div className='foro_posts_AddImagen_Container'>
              <div
                onClick={() => setImageOpen(!imageOpen)}
                className='foro_post_ImageDiv'
              >
                <img
                  src='https://cdn1.iconfinder.com/data/icons/rounded-black-basic-ui/139/Photo_Add-RoundedBlack-512.png'
                  alt='Add_Image'
                />
                <p>Add Image</p>
              </div>
            </div>
            <button onClick={handlerSubmit}>POST</button>
          </div>
        </div>
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
            comments={post.comments}
            likes={post.likes.length}
            onDeletePost={onDeletePost}
            onLikePost={likeHandler}
            onEdit={editHandlerModal}
          />
        ))}
      </div>
      <div className='foro_menuTags_container'>
        <label>Search</label>
        <input type='text' placeholder='Search' />
      </div>
    </div>
  );
}
