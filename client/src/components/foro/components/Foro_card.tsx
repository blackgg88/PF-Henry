import likeLogo from "../../../assets/foro/like-red.png";
import commentLogo from "../../../assets/foro/comment.png";
import editLogo from "../../../assets/foro/edit.png";
import trashlogo from "../../../assets/foro/trash.png";
import { useAuth0 } from "@auth0/auth0-react";
import Foro_comments from "./Foro_comments";

interface Comment{
  _id: string;
  author: any;
  content: string;
  likes: [];
}

interface User{
  username: string;
  userName: string;
}
interface Foro_Card {
  id: string;
  title: string;
  post: string;
  content: string;
  img: string;
  likes: string;
  author: string;
  onDeletePost: any;
  userId: string;
  comments: Comment[];
  onEdit: any;
  onLikePost: any;
}
// : React.FC
export function Foro_card({
  id,
  title,
  content,
  likes,
  img,
  author,
  comments,
  userId,
  onDeletePost,
  onLikePost,
  onEdit,
}: Foro_Card) {
  const { user } = useAuth0();
  console.log(user)

  return (
    <div className='foro_card_Container' key={id}>
      <div className='foro_card_InfoPOST'>
        <div className='foro_card_authorSide'>
          <p>{author}</p>
          <img
            className='foro_card_buttonEdit'
            src={
              "https://cdn.iconscout.com/icon/free/png-256/more-horizontal-3114524-2598156.png"
            }
            alt='edit'
          />
        </div>
        <div className='foro_card_titleSide'>
          <h3>{title}</h3>
        </div>
        {}
        <div className='foro_card_contentSide'>
          <p>{content}</p>
        </div>

        {img && (
          <div className='foro_card_imagenSide'>
            <img src={img} alt={title} />
          </div>
        )}

        <div className='foro_card_socialContainer'>
          <div className='foro_card_social_Left'>
            <img
              className='foro_card_button_Delete'
              src={trashlogo}
              onClick={() => onDeletePost(id, userId)}
            />
            <img
              onClick={() => onEdit(id, content)}
              className='foro_card_button_Edit'
              src={editLogo}
            />
          </div>

          <div className='foro_card_social_Right'>
            <p>{likes}</p>
            <img
              onClick={() => onLikePost(id)}
              className='foro_card_buttonLike'
              src={likeLogo}
              alt='like'
            />
            <p>{comments.length}</p>
            <img
              className='foro_card_buttonComment'
              src={commentLogo}
              alt='comment'
            />
          </div>
        </div>
          <hr/>
      </div>
      <div className='foro_card_infoCOMMENT'>
        <div className='foro_card_CommentPostSide'>
          <img src={user?.picture} alt="" />
          <textarea className="foro_card_CommentArea" />
        </div>
        <div className="foro_card_SubmitCommentSide">
          <button>Comment</button>
        </div>
        {comments?.map((comment, index) =>
          <Foro_comments
          author={comment.author.username} 
          likes={comment.likes} 
          _id={comment._id} 
          content={comment.content}
          />
        )}
      </div>

    </div>
  );
}
