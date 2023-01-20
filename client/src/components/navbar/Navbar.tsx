import { useState } from 'react';
import LoginButton from '../LoginButton';
import LogOutButton from '../LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo_smart_w.png';
import cart from '../../assets/car_w.png';

const NavBar = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className='navbar_container'>
      <div className='navbar_container_info'>
        {/*
        <div>
           <img src={logo} alt="logo"/>
        </div>
      */}
        <NavLink to='/shopping_cart'>
          <img className='logo' src={cart} alt='cart' width={20} />
        </NavLink>
        <NavLink className='link-style' to='/'>
          <p>Home</p>
        </NavLink>
        <NavLink className='link-style' to='/shop'>
          <p>Shop</p>
        </NavLink>
        <NavLink className='link-style' to='/test'>
          <p>Test</p>
        </NavLink>
        <NavLink className='link-style' to='/news'>
          <p>News</p>
        </NavLink>

        {isAuthenticated ? (
          <div className='profile-div'>
            {/* <h2>{user?.name}</h2> */}
            <img src={user?.picture} alt={user?.name} />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default NavBar;
