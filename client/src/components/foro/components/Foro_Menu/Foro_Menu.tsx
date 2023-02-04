import React from 'react';
import Home from '../../../../assets/foro/HomeW.svg';
import notification from '../../../../assets/foro/notificationW.svg';
import profile from '../../../../assets/foro/profile-white.svg';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../Redux/hook';
import { useAuth0 } from "@auth0/auth0-react";

interface props {
    refresh: any
    setRefresh: any
}

export const Foro_Menu = ({setRefresh, refresh}: props) => {
    const {isAuthenticated} = useAuth0()
    const userByBd = useAppSelector((state) => state.userReducer.userState);

  

  return (
    <div className='Foro_Menu_Container'>
        {
            isAuthenticated&&
            <NavLink onClick={setRefresh?()=> setRefresh(!refresh):()=>{}} to={`/foro/profile/${userByBd._id}`} className='Menu_ButtonContainer'>
                <img src={profile} alt="profile" />
            </NavLink>
        }
        <NavLink to={'/foro'} className='Menu_ButtonContainer'>
            <img src={Home} alt="home" />
        </NavLink>
        <div className='Menu_ButtonContainer'>
            <img src={notification} alt="notification" />
        </div>
    </div>
  )
}
