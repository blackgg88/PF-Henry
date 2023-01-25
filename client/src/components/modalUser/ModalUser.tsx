import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Auth0 from 'auth0-js';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../../../config';
import { useAppDispatch } from '../../Redux/hook';
import { kevinPapitoMiAmor } from '../../Redux/slice/user/user.slice';
import { putUserFetch } from '../../Redux/slice/user/userController';
import { userInterface } from '../../Redux/slice/user/user.slice';

interface Form {
  username: string;
  picture: string;
}

const ModalUser = ({ close, userByBd }: { close: Function; userByBd: userInterface }) => {
  const { user } = useAuth0();

  const info: { username: string; picture: string } = {
    username: userByBd?.username,
    picture: userByBd?.picture,
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
      form.username,
      form.picture && '',
      userByBd?._id,
    );

    dispatch(kevinPapitoMiAmor(userUpdated));

    close(false);
  };

  return (
    <div className='Modal_Overlay'>
      <div className='Modal_Container'>
        <div className='Modal_ProfilePic'>
          <img src={user?.picture} alt='profilePic' />
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
            <p>Change Image</p>
            <input name='picture' type='file' placeholder='picture' />
          </div>
        </div>
        <div className='Modal_SubmitContainer'>
          <button onClick={handleChangePassword}>Reset Password</button>
          <button className='Modal_buttonSave' onClick={handleSaveChange}>
            Save
          </button>
          <button className='Modal_buttonCancel' onClick={() => close(false)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalUser;
