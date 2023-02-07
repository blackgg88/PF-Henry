import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import logoWhite from '../../assets/logo_smart_w.png';
import logoTop from '../../assets/logo_smart_b.png';
import menuResp from '../../assets/responsive-menu-icon.png';
import cart from '../../assets/car_w.png';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { changeTheme } from '../../Redux/slice/theme/theme.slice';
import moon from '../../assets/foro/DarkMode/moonW.svg'
import sun from '../../assets/foro/DarkMode/sunB.svg'

const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  const [profileWindow, setProfileWindow] = useState<boolean>(false);
  const [responsiveMenu, setResponsiveMenu] = useState<boolean>(false);
  const productsInCart = useAppSelector((state) => state.cartReducer.Products);
  const userByBd = useAppSelector((state) => state.userReducer.userState);
  const dark = useAppSelector((state) => state.themeReducer.dark);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (responsiveMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [responsiveMenu]);

  const logoutUser = () => {
    localStorage.removeItem('userByBd');
    logout();
    setProfileWindow(false);
  };

  const handleChangeTheme = () => {
    dispatch(changeTheme(!dark));
  };

  return (
    <div className='Nav_topLanding'>
      <NavLink to={'/'} className='Nav_container_logo'>
        <img className='nav_toplogo' src={dark ? logoWhite : logoTop} alt='logo' />
      </NavLink>

      <div className='Nav_container_navbar'>
        <div className='navbar_container'>
          <img
            onClick={() => setResponsiveMenu(!responsiveMenu)}
            className='Nav_responsive_LogoMenu'
            src={menuResp}
            alt='menu'
          />
          <img className='Nav_responsive_LogoSmartnet' src={logoWhite} alt='' />
          <div className='Nav_ShoppinCartContainer'>
            <NavLink className='link-style' to='/shopping_cart'>
              <img className='logo' src={cart} alt='cart' width={20} />
              {productsInCart.length > 0 && (
                <div className='nav_cart_pop'>
                  <h1>{productsInCart.length}</h1>
                </div>
              )}
            </NavLink>
          </div>
          <NavLink className='link-style' to='/'>
            <p className='nav_middle_button'>Home</p>
          </NavLink>
          {isAuthenticated && (
            <NavLink className='link-style' to='/foro'>
              <p className='nav_middle_button'>Forum</p>
            </NavLink>
          )}
          <NavLink className='link-style' to='/shop'>
            <p className='nav_middle_button'>Shop</p>
          </NavLink>
          <NavLink className='link-style' to='/news'>
            <p className={userByBd.role == 'admin' ? 'nav_middle_button' : ''}>News</p>
          </NavLink>
          {userByBd.role == 'admin' && (
            <NavLink className='link-style' to='/admin'>
              <p>Admin</p>
            </NavLink>
          )}
          <div className='Nav_ThemeDiv' onClick={handleChangeTheme}> 
            <div className={dark?'Nav_Theme_moon':'Nav_theme_sun'}>
              {
                dark?
               <img src={moon}/>:
               <img src={sun}/>
              }
            </div>
          </div>

          {isAuthenticated && (
            <div className='profile-div'>
              <img
                onClick={() => setProfileWindow(!profileWindow)}
                src={
                  isAuthenticated
                    ? userByBd.picture
                    : 'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg'
                }
                alt={'pic'}
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
      <div className={responsiveMenu ? 'nav_responsive_MENU' : 'nav_responsive_MENUClosed'}>
        <NavLink onClick={() => setResponsiveMenu(!responsiveMenu)} className='link-style' to='/'>
          <p className='nav_middle_button'>Home</p>
        </NavLink>
        <NavLink
          onClick={() => setResponsiveMenu(!responsiveMenu)}
          className='link-style'
          to='/foro'
        >
          <p className='nav_middle_button'>Foro</p>
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
          to='/news'
        >
          <p>News</p>
        </NavLink>
        {userByBd.role == 'admin' && (
          <NavLink
            onClick={() => setResponsiveMenu(!responsiveMenu)}
            className='link-style'
            to='/admin'
          >
            <p className='nav_middle_button'>Admin</p>
          </NavLink>
        )}
        <NavLink
          onClick={() => setResponsiveMenu(!responsiveMenu)}
          className='link-style'
          to='/shopping_cart'
        >
          <p>Cart</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
