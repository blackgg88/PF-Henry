import close from "../../../assets/foro/cancel.svg";
import { useState } from "react";
import { putPost } from "../../../../helpers/foro/putPost";
import { getPosts } from "../../../../helpers/foro/getPosts";

interface CreatePost {
  id: string;
  content: string;
  onClose: any;
  onSave: any;
}

export default function Foro_createPost({
  onSave,
  id,
  content,
  onClose,
}: CreatePost) {
  const [formEdit, setFormEdit] = useState({
    content,
    id,
  });

  const closeModal = () => onClose(false);

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormEdit({
      ...formEdit,
      [e.target.name]: e.target.value,
    });
  };

  const saveModal = async () => {
    onSave(formEdit.content, formEdit.id);
    onClose(false);
  };

  return (
    <div className='foro_create_overlay'>
      <div className='foro_create_containere'>
        <div className='foro_create_header'>
          <p>Edit Content</p>
          <img onClick={closeModal} src={close} alt='closeIcon' />
        </div>
        <div className='foro_create_content'>
          <textarea
            onChange={e => changeHandler(e)}
            name='content'
            value={formEdit.content}
            className='foro_create_EditTextArea'
            placeholder='content'
          />
        </div>
        <div className='foro_create_submit'>
          <button onClick={saveModal}>Save</button>
        </div>
      </div>
    </div>
  );
}
