import React, { useEffect, useState } from 'react'
import { Foro_Menu } from '../Foro_Menu/Foro_Menu'
import defaultBanne from '../../../../assets/images/SmartBackground.jpg'
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../../Redux/hook';
import { userInterface } from '../../../../Redux/slice/user/user.slice';
import PostIcon from '../../../../assets/foro/postsIcon.svg'
import edit from '../../../../assets/foro/edit.svg'
import commentIcon from '../../../../assets/foro/commentsIcon.svg'
import { useForoHome } from '../ForoHome/hooks/useForoHome';
import { Foro_card } from '../Foro_card';
import { getUserByEmail } from '../../../../../helpers/user/getUserByEmail';
import { getAllPostUser } from '../../../../../helpers/user/getAllPostUser';
import logoDiscord from '../../../../assets/discord.svg';
import { changePicture } from '../../../../Redux/slice/user/user.slice';
import Foro_editPost from '../EditPost/Foro_editPost';
import { uploadImage } from '../../../../../helpers/foro/uploadImage';
import { putProfileBanner } from '../../../../../helpers/user/putProfileBanner';
import Swal from "sweetalert2";
import { putProfilePicture } from '../../../../../helpers/user/putProfilePicture';

interface UserProfile {
    _id: string
    firstName: string
    lastName: string
    username: string
    email: string
    picture: string
    role: string
    posts: string[]
    comments: string[]
    banner: string
}


export const Foro_Profile = () => {
    const [User, setUser] = useState<UserProfile>({
        _id: '',
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        comments: [],
        picture: '',
        banner: '',
        posts: [],
        role: ''
    })
    const [refresh, setRefresh] = useState<boolean>(false)
    const [postByUser, setPostByUser] = useState([])
    const [bannerChange, setBannerChange] = useState<string>('')
    const [imageChange, setImageChange] = useState<string>('')
    const emailProfile = useParams()
    const userByBd: userInterface = useAppSelector((state) => state.userReducer.userState);
    const dispatch = useAppDispatch()
    

    const [
        form,
    commentary,
    allPost,
    editOpen,
    editPost,
    allPostRespaldo,
    searchInput,
    selectedTag,
    previewTag,
    addLike, 
    addPost, 
    addEdit, 
    addComment,
        {
            likeHandler,
            handlerLike,
            handlerSubmit,
            handlerSubmitEdit,
            handlerChangePost,
            submitPost,
            onDeletePost,
            onDeleteComment,
            setAllPost,
            editHandlerModal,
            setEditOpen,
            setEditPost,
            handlerChangeComment,
            submitComment,
            likeCommentHandler,
            handlerConsole
        },
      ]: any = useForoHome();
    
    useEffect( ()=> {
        if (emailProfile.email) {
            getUserByEmail(emailProfile.email)
            .then( res => {
                setUser(res)
            })
        }
    }, [refresh, addLike, addPost, addEdit, addComment, imageChange])

    useEffect( ()=> {
        if (emailProfile.email) {
            getAllPostUser(emailProfile.email)
            .then( res => {
                setPostByUser(res)
            })
        }
    }, [refresh, addLike, addPost, addEdit, addComment])
    
    useEffect( ()=> {
        if (bannerChange) {
            putProfileBanner(userByBd.email, bannerChange)
            .then( res => res.json)
            .then( res => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-right",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener("mouseenter", Swal.stopTimer);
                      toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                  });
                Toast.fire({
                    icon: "success",
                    title: "You have changed your Banner picture",
                  });
                  setRefresh(!refresh)
            })
        }
    }, [bannerChange])

    useEffect( ()=> {
        if (imageChange) {
            putProfilePicture(userByBd.email, imageChange)
            .then(res => res.json())
            .then(res => {
              
              const Toast = Swal.mixin({
                toast: true,
                position: "bottom-right",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", Swal.stopTimer);
                  toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
              });
              Toast.fire({
                icon: "success",
                title: "You have changed your profile picture",
              });
            })
            dispatch(changePicture({picture: imageChange}))
            setRefresh(!refresh)
          }
    }, [imageChange])
    
  return (
    <div className='Foro_Profile_ALLContainer'>

        <div className='foro_Profile_MenuSide'>
            <Foro_Menu refresh={refresh} setRefresh={setRefresh}/>
        </div>

        <div className='FORO_PROFILE'>
            <div className='Foro_Profile_PostSide'>
                <div className='Foro_Profile_Container'>
                    <div className='Foro_Profile_Banner_PicturesSide'>
                        {
                            userByBd.email==emailProfile.email&&
                            <label htmlFor="file-input" className="Modal_custom-file-upload">
                                <img className='editButton' src={edit} alt="edit" />
                            </label>
            
                         }
                            <input onChange={(e)=> uploadImage(e, setBannerChange)} className='Foro_Baner_Input' id="file-input" type="file"></input>
                         {
                            userByBd.email==emailProfile.email&&
                            <label htmlFor="profile-input" className="Modal_custom-file-upload">
                                <img className='editProfilePicButton' src={edit} alt="edit" />
                            </label>
                         }
                            <input onChange={(e)=> uploadImage(e, setImageChange)} className='Foro_Baner_Input' id="profile-input" type="file"></input>
                        <img src={User.banner?User.banner:defaultBanne} alt="banner" />
                        <img className={User.picture?'profilePic':'profilePicDefault'} src={User.picture?User.picture:logoDiscord} alt='profilePic' />
                    </div>

                    <div className='Foro_Profile_NameSide'>
                        {
                            User.firstName&&<h1>{`${User.firstName} ${User.lastName}`.length<=15?`${User.firstName} ${User.lastName}`:`${User.firstName} ${User.lastName[0]}.`}</h1>
                        }
                        {
                            User.firstName&&<p>{User.username}</p>
                        }
                        {
                            !User.firstName&&<h1 className='Foro_Profile_NameDefault'>{User.username}</h1>
                        }
                        
                    </div>

                    <div className='Foro_Profile_ContentSide'>
                        <div className='Foro_Profile_StatContainer'>
                            <img src={PostIcon} alt="Post" />
                            <p>Post: {postByUser.length}</p>
                        </div>
                        <div className='Foro_Profile_StatContainer'>
                            <img src={commentIcon} alt="comments" />
                            <p>Comments: {User.comments.length}</p>
                        </div>
                    </div>
                </div>


            {
                postByUser.length?
                postByUser?.map((post: any) => (
                    <Foro_card
                        commentary={commentary}
                        handlerChangeComment={handlerChangeComment}
                        submitComment={submitComment}
                        key={post._id}
                        id={post._id}
                        title={post.title}
                        content={post.content}
                        img={post.image}
                        post={post}
                        author={post.author.userName || post.author.username}
                        email={post.author.email}
                        userId={post.author._id}
                        comments={post.comments}
                        likes={post.likes}
                        onDeletePost={onDeletePost}
                        onLikePost={likeHandler}
                        onEdit={editHandlerModal}
                        created={post.created}
                        onDeleteComment={onDeleteComment}
                        likeCommentHandler={likeCommentHandler}
                        category={post.category}
                        
                    />
                )):<img className="foro_home_loaderGif" src="https://usagif.com/wp-content/uploads/loading-25.gif" alt="loader" />
            }
            </div>
        </div>
    </div> 
  )
}