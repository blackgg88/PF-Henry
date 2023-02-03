//------- USUARIO HELPER ----------
import { useState } from "react";
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';
//---------------
import addIMage from "../../../assets/foro/addImage.svg";
import connectivityIconW from '../../../assets/foro/connectivityIconW.svg';
import entertainmentW from '../../../assets/foro/EntertainmentW.svg';
import energyW from '../../../assets/foro/energyW.svg';
import securityW from '../../../assets/foro/securityW.svg';
import healthW from '../../../assets/foro/health.svg';
import confort from '../../../assets/foro/confortW.svg';


export default function Foro_createPost({
  form,
  handlerChangePost,
  handlerSubmit,
  handleTags,
  selectedTag,
  previewTag,
  HandlerpreviewTags,
  handlerQuitPreview
}: any) {

  const [imageOpen, setImageOpen] = useState<boolean>(false);
  const userByBd = useAppSelector((state) => state.userReducer.userState);

  
  

  return (
    <div className="foro_posts_creator">
      <div className="foro_post_inputsAndImage">
        <div className="foro_posts_inputsSide">
          <img src={userByBd.picture} alt="profilePic" />
        </div>

        <div className="foro_posts_secondInput">
          <input
            value={form.title}
            onChange={handlerChangePost}
            name="title"
            placeholder="Title"
            type="text"
          />
          <textarea
            value={form.content}
            onChange={handlerChangePost}
            name="content"
            className="foro_post_textAREA"
            placeholder="Description"
          />
        
          <div className="foro_post_tags">
            <p className="foro_post_tagP">Category</p>

            <div className={
                  selectedTag["Connectivity and Control"]
                    ? "foro_post_tag_selected"
                    : "foro_post_tag_normal"
                }>
              <p className={
                  previewTag["Connectivity and Control"]
                    ? "previewOn"
                    : "previewOff"
                }>Connectivity and Control</p>
              <img onMouseEnter={HandlerpreviewTags} onMouseLeave={handlerQuitPreview} id="Connectivity and Control" src={connectivityIconW} onClick={handleTags}/>
               
            </div>

            <div className={
                selectedTag["Home Entertainment"]
                  ? "foro_post_tag_selected"
                  : "foro_post_tag_normal"
              }>
              <p className={
                  previewTag["Home Entertainment"]
                    ? "previewOn"
                    : "previewOff"
                }>Home Entertainment</p>
              <img onMouseEnter={HandlerpreviewTags} onMouseLeave={handlerQuitPreview} id="Home Entertainment" onClick={handleTags} src={entertainmentW}/>
            </div>
             
            <div className={
                selectedTag["Energy Management"]
                  ? "foro_post_tag_selected"
                  : "foro_post_tag_normal"
              }>
              <p className={
                  previewTag["Energy Management"]
                    ? "previewOn"
                    : "previewOff"
                }>Energy Management</p>
              <img onMouseEnter={HandlerpreviewTags} onMouseLeave={handlerQuitPreview} id='Energy Management' onClick={handleTags} src={energyW}/>
            </div>

            <div className={
                selectedTag["Safety and Security"]
                  ? "foro_post_tag_selected"
                  : "foro_post_tag_normal"
              }>
                <p className={
                  previewTag["Safety and Security"]
                    ? "previewOn"
                    : "previewOff"
                }>Safety and Security</p>
              <img onMouseEnter={HandlerpreviewTags} onMouseLeave={handlerQuitPreview} id='Safety and Security' onClick={handleTags} src={securityW}/>
            </div>
           
            <div className={
                  selectedTag["Comfort and Ease"]
                    ? "foro_post_tag_selected"
                    : "foro_post_tag_normal"
                }>
                  <p className={
                  previewTag["Comfort and Ease"]
                    ? "previewOn"
                    : "previewOff"
                }>Comfort and Ease</p>
                <img onMouseEnter={HandlerpreviewTags} onMouseLeave={handlerQuitPreview} id='Comfort and Ease' onClick={handleTags} src={confort}/>
            </div>

            <div className={
                  selectedTag["Lifestyle and Health"]
                    ? "foro_post_tag_selected"
                    : "foro_post_tag_normal"
                }>
                  <p className={
                  previewTag["Lifestyle and Health"]
                    ? "previewOn"
                    : "previewOff"
                }>Lifestyle and Health</p>
              <img onMouseEnter={HandlerpreviewTags} onMouseLeave={handlerQuitPreview} id='Lifestyle and Health' onClick={handleTags} src={healthW} />
            </div>
          </div>
          {imageOpen && (
            <input
              value={form.image}
              onChange={handlerChangePost}
              name="image"
              placeholder="Image"
              type="text"
            />
          )}
        </div>
      </div>
      <hr />
      <div className="foro_posts_buttonSide">
        <div className="foro_posts_AddImagen_Container">
          <div
            onClick={() => setImageOpen(!imageOpen)}
            className="foro_post_ImageDiv"
          >
            <img src={addIMage} alt="Add_Image" />
            <p>Add Image</p>
          </div>
        </div>
        <button onClick={handlerSubmit}>POST</button>
      </div>
    </div>
  );
}
