import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import logoWhite from '../../assets/logo_smart_w.png';
import logoTop from '../../assets/logo_smart_b.png';
import menuResp from '../../assets/responsive-menu-icon.png';
import cart from '../../assets/car_w.png';

const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const [profileWindow, setProfileWindow] = useState<boolean>(false);
  const [responsiveMenu, setResponsiveMenu] = useState<boolean>(false);

  const logoutUser = () => {
    logout();
    setProfileWindow(false);
  };

  return (
    <div className='Nav_topLanding'>
      <div className='Nav_container_logo'>
        <img className='logo' src={logoTop} alt='logo' />
      </div>

      <div className='Nav_container_navbar'>
        <div className='navbar_container'>
          <img
            onClick={() => setResponsiveMenu(!responsiveMenu)}
            className='Nav_responsive_LogoMenu'
            src={menuResp}
            alt='menu'
          />
          <img className='Nav_responsive_LogoSmartnet' src={logoWhite} alt='' />
          <NavLink className='link-style' to='/shopping_cart'>
            <img className='logo' src={cart} alt='cart' width={20} />
          </NavLink>
          <NavLink className='link-style' to='/'>
            <p className='nav_middle_button'>Home</p>
          </NavLink>
          <NavLink className='link-style' to='/shop'>
            <p className='nav_middle_button'>Shop</p>
          </NavLink>
          <NavLink className='link-style' to='/news'>
            <p>News</p>
          </NavLink>

          {isAuthenticated && (
            <div className='profile-div'>
              <img
                onClick={() => setProfileWindow(!profileWindow)}
                src={
                  isAuthenticated
                    ? user?.picture
                    : 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'
                }
                alt={user?.name}
              />
            </div>
          )}
          {profileWindow && <div className='nav_modalTriangle'></div>}
          {profileWindow && (
            <div className='nav_modalProfilewindows'>
              <NavLink className='nav_modalWindow_Link' to='/profile'>
                <p onClick={() => setProfileWindow(!profileWindow)}>Profile</p>
              </NavLink>
              <NavLink className='nav_modalWindow_Link' to='/'>
                <p onClick={logoutUser}>Logout</p>
              </NavLink>
            </div>
          )}
        </div>
      </div>
      {responsiveMenu && (
        <div className='nav_responsive_MENU'>
          <NavLink
            onClick={() => setResponsiveMenu(!responsiveMenu)}
            className='link-style'
            to='/'
          >
            <p className='nav_middle_button'>Home</p>
          </NavLink>
          <NavLink
            onClick={() => setResponsiveMenu(!responsiveMenu)}
            className='link-style'
            to='/shop'
          >
            <p className='nav_middle_button'>Shop</p>
          </NavLink>
          <NavLink
            onClick={() => setResponsiveMenu(!responsiveMenu)}
            className='link-style'
            to='/test'
          >
            <p className='nav_middle_button'>Test</p>
          </NavLink>
          <NavLink
            onClick={() => setResponsiveMenu(!responsiveMenu)}
            className='link-style'
            to='/news'
          >
            <p>News</p>
          </NavLink>
          <NavLink
            onClick={() => setResponsiveMenu(!responsiveMenu)}
            className='link-style'
            to='/shopping_cart'
          >
            <p>Cart</p>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
