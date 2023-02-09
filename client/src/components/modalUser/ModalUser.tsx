import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Auth0 from 'auth0-js';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../../config';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { kevinPapitoMiAmor } from '../../Redux/slice/user/user.slice';
import { putUserFetch } from '../../Redux/slice/user/userController';
import { userInterface } from '../../Redux/slice/user/user.slice';
import { putProfilePicture } from '../../../helpers/user/putProfilePicture';
import { changePicture } from '../../Redux/slice/user/user.slice';
import closeWindows from '../../assets/close.svg'
import changePic from '../../assets/changePicture.svg'
import Swal from "sweetalert2";



interface Form {
  username: string;
  picture: string;
  firstName: string;
  lastName: string;
}

const ModalUser = ({ close, userByBd }: { close: Function; userByBd: userInterface }) => {
  
  const [imageUpload, setImageUpload] = useState<string>('')
  const [changingIMG, setChangingIMG] = useState<boolean>(false)
  const { user } = useAuth0();
  

const uploadImage = async (e:any) => {
  try {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tags", "SmartNest");
    formData.append("upload_preset", "db1xdljk");
  
    const response = await fetch("https://api.cloudinary.com/v1_1/dg1roy34p/image/upload", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    setImageUpload(data.secure_url)
  } catch (error) {
    console.error(error);
  }
};


console.log(imageUpload)

useEffect(()=> {
  if (imageUpload && user?.email) {
    setChangingIMG(true)
    putProfilePicture(user.email, imageUpload)
    .then(res => res.json())
    .then(res => {
      setChangingIMG(false)
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
    dispatch(changePicture({picture: imageUpload}))
  }
}, [imageUpload])


  const info: { username: string; picture: string; firstName: string; lastName: string } = {
    username: userByBd?.username,
    picture: userByBd?.picture,
    firstName: userByBd?.firstName,
    lastName: userByBd?.lastName
  };

  const [form, setForm] = useState<Form>(info);

  const dispatch = useAppDispatch();

  const handleChangePassword = () => {
    var webAuth = new Auth0.WebAuth({
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID,
    });

    webAuth.changePassword(
      {
        connection: userByBd.connection,
        email: userByBd.email,
      },
      function (err: any, resp: any) {
        if (err) {
          console.log(err.message);
        } else {
          console.log(resp);
        }
      },
    );
  };

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChange = async () => {
    const userUpdated = await putUserFetch(
      {
        username: form.username,
        firstName: form.firstName,
        lastName: form.lastName
      },
      userByBd?._id,
    );

    dispatch(kevinPapitoMiAmor(userUpdated));
    setImageUpload('')
    close(false);
  };

  return (
    <div className='Modal_Overlay'>
      <div className='Modal_Container'>
        <div className='Modal_ProfilePic'>
          <div className='Modal_PicContainer'>
            <img src={userByBd.picture} alt='profilePic' />
            {
              /*<input id="file-input" onChange={uploadImage} name='file' type='file'/>*/
            }
              
              <label htmlFor="file-input" className="Modal_custom-file-upload">
               <img className='modal_ChangePicICON' src={changePic} alt="changePic" />
              </label>
              <input onChange={uploadImage} className='modal_pic_input' id="file-input" type="file"></input>
            
           
          </div>
        </div>
        <div className='Modal_TitleContainer'>
          <h1>Edit Profile</h1>
        </div>

        <div className='Modal_infoSide'>
          <div className='Modal_info1'>
            <p>Email</p>
            <input
              onChange={handlerChange}
              name='email'
              type='text'
              placeholder='email'
              value={userByBd?.email}
            />
            <p>Username</p>
            <input
              onChange={handlerChange}
              name='username'
              type='text'
              placeholder='username'
              value={form.username}
            />
            <p>First name</p>
            <input
              onChange={handlerChange}
              name='firstName'
              type='text'
              placeholder='username'
              value={form.firstName}
            />
            <p>Last name</p>
            <input
              onChange={handlerChange}
              name='lastName'
              type='text'
              placeholder='username'
              value={form.lastName}
            />
            
          </div>
        </div>
        <div className='Modal_SubmitContainer'>
          <button className='Modal_resetButton' onClick={handleChangePassword}>Reset Password</button>
          <button disabled={changingIMG?true:false} className='Modal_buttonSave' onClick={handleSaveChange}>
            Save
          </button>
        </div>
          <img className='Modal_buttonCancel' onClick={() => close(false)} src={closeWindows} alt="closeWindows" />
      </div>
    </div>
  );
};

export default ModalUser;
