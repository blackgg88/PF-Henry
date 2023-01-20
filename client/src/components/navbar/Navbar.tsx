import { useState } from 'react';
import LoginButton from '../LoginButton';
import LogOutButton from '../LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo_smart_w.png"
import logoTop from "../../assets/logo_smart_b.png";
import cart from '../../assets/car_w.png';

const NavBar = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
  <div className="Nav_topLanding">
    
    <div className="Nav_container_logo">
        <img className="logo" src={logoTop} alt="logo" />
    </div>

      <div className="Nav_container_navbar"> 
        <div className='navbar_container'>
              <img  className="logo" src={cart} alt='cart' width={20} />
                <NavLink className="link-style" to='/'><p className='nav_middle_button'>Home</p></NavLink>
                <NavLink className="link-style" to='/shop'><p className='nav_middle_button'>Shop</p></NavLink>
                <NavLink className="link-style" to='/test'><p className='nav_middle_button'>Test</p></NavLink>
                <NavLink className="link-style" to='/news'><p >News</p></NavLink>

                {
                  isAuthenticated && 
                    (<div className="profile-div">
                      <img src={ isAuthenticated? user?.picture : 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'} alt={user?.name} />
                  </div>)
                }
          <div>
        </div>    
      </div>
    </div>
  </div>
  );
};

export default NavBar;
