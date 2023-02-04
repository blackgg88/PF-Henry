import likeLogo from "../../../assets/foro/like-red.png";
//import commentLogo from "../../../assets/foro/comment.png";
import editLogo from "../../../assets/foro/edit.png";
import trashlogo from "../../../assets/foro/trash.png";
import { useAuth0 } from "@auth0/auth0-react";
import Foro_comments from "./Foro_comments";
import moment from "moment";
import { useEffect, useState } from "react";
import { postCommentsPosts } from "../../../../helpers/foro/postCommentsPosts";
import { useAppDispatch, useAppSelector } from '../../../Redux/hook';

import likeNo from '../../../assets/foro/heart-svgrepo-com.svg';
import likeYes from '../../../assets/foro/heart-svgrepo-com (1).svg';
import edit from '../../../assets/foro/edit-svgrepo-com.svg';
import deleteIcon from '../../../assets/foro/trash-delete-remove-clean-svgrepo-com.svg';
import commentLogo from '../../../assets/foro/comment-svgrepo-com.svg';
import { NavLink } from "react-router-dom";

interface Comment {
  _id: string;
  author: any;
  content: string;
  likes: [];
  deleted: boolean
  created: Date
}

interface User{
  username: string;
  userName: string;
}
interface Foro_Card {
  commentary: any
  handlerChangeComment: any
  submitComment: any
  id: string;
  title: string;
  post: string;
  content: string;
  img: string;
  likes: string[];
  author: string;
  email: string
  onDeletePost: any;
  userId: string;
  comments: Comment[];
  onEdit: any;
  onLikePost: any;
  created: Date
  onDeleteComment: any
  likeCommentHandler: any
  category: string
}
// : React.FC
export function Foro_card({
  commentary,
  handlerChangeComment,
  submitComment,
  id,
  title,
  content,
  likes,
  img,
  author,
  email,
  comments,
  userId,
  onDeletePost,
  onLikePost,
  onEdit,
  created,
  onDeleteComment,
  likeCommentHandler,
  category
}: Foro_Card) {
  const { user } = useAuth0();
  const [emailLoged, setEmailLoged] = useState<string>('')
  const userByBd = useAppSelector((state) => state.userReducer.userState);
  
  const openComment = (id:string)=> {
    var x = document.getElementById(`comment-${id}`);
    if (x && x?.style.display!='none') {
      x.style.display = 'none';
    } else if (x) {
      x.style.display='block'
    }
  }
  
  useEffect(()=>{
    openComment(id)
  }, [])


  return (
    <div className='foro_card_Container' key={id}>
      <div className='foro_card_InfoPOST'>
        <div className='foro_card_authorSide'>
          <NavLink to={`/foro/profile/${email}`}>
            <h3>{author.charAt(0).toUpperCase()+author.slice(1)}</h3>
          </NavLink>
          <h5>{moment(created).fromNow()}</h5>
        </div>
        <div className='foro_card_titleSide'>
          <h3>{title}</h3>
        </div>
        {}
        <div className='foro_card_contentSide'>
          <p>{content}</p>
        </div>
        <div>
          {category}
        </div>

        {img && (
          <div className='foro_card_imagenSide'>
            <img src={img} alt={title} />
          </div>
        )}

        <div className='foro_card_socialContainer'>
          <div className='foro_card_social_Left'>
            {
              user?.email===email&&
              <img
                className='foro_card_button_Delete'
                src={deleteIcon}
                onClick={() => onDeletePost(id, userId)}
              />
            }
            {
              user?.email===email&&
              <img
              onClick={() => onEdit(id, content)}
              className='foro_card_button_Edit'
              src={edit}
            />
            }
          </div>

          <div className='foro_card_social_Right'>
            <p>{likes.length}</p>
            {
              user?.email?
              <img
              onClick={() => onLikePost(id)}
              className='foro_card_buttonLike'
              src={likes.includes(user.email)?likeYes:likeNo}
              alt='like'
            />:<img
            onClick={() => alert('Only users can like this post')}
            className='foro_card_buttonLike'
            src={likeNo}
            alt='like'
          />
            }
            
            <p>{comments.filter(e=> e.deleted==false).length}</p>
            <img
              onClick={()=> openComment(id)}
              className='foro_card_buttonComment'
              src={commentLogo}
              alt='comment'
            />
          </div>
        </div>
          
      </div>
      <div className='foro_card_infoCOMMENT'>
        <div id={`comment-${id}`} className='foro_card_ALL'>
        <div className='foro_card_CommentPostSide'>
          <img src={userByBd.picture} alt="" />
          <textarea onChange={handlerChangeComment} name="content" placeholder="Post a commentary..." value={commentary.content} className="foro_card_CommentArea" />
        </div>
        <div className="foro_card_SubmitCommentSide">
          <button onClick={()=> submitComment(id, user?.email)}>Comment</button>
        </div>
          {comments?.filter(e=> e.deleted!=true).map((comment, index) =>
            <Foro_comments
            author={comment.author.username}
            email={comment.author.email}
            likes={comment.likes} 
            _id={comment._id} 
            content={comment.content}
            onDeleteComment={onDeleteComment}
            created={comment.created}
            likeCommentHandler={likeCommentHandler}
            />
          )}
        </div>

      </div>

    </div>
  );
}
