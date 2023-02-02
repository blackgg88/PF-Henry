//------- USUARIO HELPER ----------
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
//---------------
import addIMage from '../../../assets/foro/addImage.svg'

export default function Foro_createPost({ form, handlerChangePost, handlerSubmit,handleTags }: any) {

  const { user } = useAuth0();
  const [imageOpen, setImageOpen] = useState<boolean>(false);
  
  console.log(form.category)
  console.log(form)

  return (
    <div className='foro_posts_creator'>
      <div className="foro_post_inputsAndImage">
        
        <div className='foro_posts_inputsSide'>
          <img src={user?.picture} alt='profilePic' />
        </div>


        <div className='foro_posts_secondInput'>
          <input
            value={form.title}
            onChange={handlerChangePost}
            name='title'
            placeholder='Title'
            type='text'
          />
          <textarea
            value={form.content}
            onChange={handlerChangePost}
            name='content'
            className='foro_post_textAREA'
            placeholder='Description'
          />
{/* Connectivity = 'Connectivity and Control',
  Entertainment = 'Home Entertainment',
  Energy = 'Energy Management',
  Safety = 'Safety and Security',
  Comfort = 'Comfort and Ease',
  Health = 'Lifestyle and Health', */}
          <div className='foro_post_tags'>
            <input onClick={handleTags}name="category" value="Connectivity and Control"/>
            <input onClick={handleTags}name="category" value="Home Entertainment"/>
            <input onClick={handleTags}name="category" value="Energy Management"/>
            <input onClick={handleTags}name="category" value="Safety and Security"/>
            <input onClick={handleTags}name="category" value="Comfort and Ease"/>
            <input onClick={handleTags}name="category" value="Lifestyle and Health"/>
          </div>
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
      </div>
      <hr />
      <div className='foro_posts_buttonSide'>
        <div className='foro_posts_AddImagen_Container'>
          <div
            onClick={() => setImageOpen(!imageOpen)}
            className='foro_post_ImageDiv'
          >
            <img
              src={addIMage}
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
