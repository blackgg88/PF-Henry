import cart from '../assets/cart.svg';

const NavBar = () => {
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
      </div>
    </div>
  );
};

export default NavBar;
