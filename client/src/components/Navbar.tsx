import { useState } from 'react';
import LoginButton from './LoginButton';
import LogOutButton from './LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';

import cart from '../assets/cart.svg';

const NavBar = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      <div>
        <div>Logo</div>
        <div>
          <a href=''>Home</a>
          <a href=''>Shop</a>
          <a href=''>News</a>
        </div>
      </div>
      <div>
        <img src={cart} alt='cart' width={20} />
      </div>
      <div>
        <a>User Avatar</a>
        {isAuthenticated ? (
          <div>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <h3>{user?.email}</h3>
            <LogOutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default NavBar;
