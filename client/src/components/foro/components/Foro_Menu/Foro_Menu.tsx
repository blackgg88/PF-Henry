import React from 'react';
import Home from '../../../../assets/foro/HomeW.svg';
import notification from '../../../../assets/foro/notificationW.svg';
import profile from '../../../../assets/foro/profile-white.svg';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../Redux/hook';

export const Foro_Menu = () => {
    const userByBd = useAppSelector((state) => state.userReducer.userState);

  

  return (
    <div className='Foro_Menu_Container'>
        <NavLink to={`/foro/profile/${userByBd.email}`} className='Menu_ButtonContainer'>
            <img src={profile} alt="profile" />
        </NavLink>
        <NavLink to={'/foro'} className='Menu_ButtonContainer'>
            <img src={Home} alt="home" />
        </NavLink>
        <div className='Menu_ButtonContainer'>
            <img src={notification} alt="notification" />
        </div>
    </div>
  )
}
