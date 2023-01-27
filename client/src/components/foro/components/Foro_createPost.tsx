//------- USUARIO HELPER ----------
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
//---------------

export default function Foro_createPost({ form, handlerChangePost, handlerSubmit }: any) {

  const { user } = useAuth0();
  const [imageOpen, setImageOpen] = useState<boolean>(false);

  return (
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
  );
}
