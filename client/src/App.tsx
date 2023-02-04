import { Route, Routes } from 'react-router-dom';
// import restProvider from 'ra-data-simple-rest';

import News from './components/news/News';
import Shop from './Shop/Shop';
import Home from './components/home/Home';
import { Dashboard_user } from './components/dashboard_user/Dashboard_user';
import Detail from './components/details/Detail';
import AppAdmin from './components/dashboard_admin/AppAdmin';
import Footer from './components/Footer';
import NavBar from './components/navbar/Navbar';
import ShoppingCart from './components/checkout/ShoppingCart';
import Form from './components/checkout/FormComponent';
import ForoHome from './components/foro/components/ForoHome/foroHome';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from './Redux/hook';
import { addProduct } from './Redux/slice/shoppingCart/shoppingCart.slice';
import { getUserLogin } from './Redux/slice/user/user.slice';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page404 from './components/page404/page404';
import About from './components/about/About';
import { Foro_Profile } from './components/foro/components/Foro_Profile/Foro_Profile';

function App() {
  const location = useLocation();
  // console.log(location.pathname);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const productsInLS = JSON.parse(localStorage.getItem('shoppingCart') as string) ?? [];

    if (productsInLS.length) {
      dispatch(addProduct(productsInLS));
    }

    const userInLS = JSON.parse(localStorage.getItem('userByBd') as string) ?? {};

    if (userInLS.email) {
      dispatch(getUserLogin(userInLS));
    }
  }, []);

  return (
    <>
      <ToastContainer />
      {!['/admin'].some((path) => location.pathname.startsWith(path)) && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' />
        <Route path='/shop' element={<Shop />} />
        <Route path='/news' element={<News />} />
        <Route path='/profile' element={<Dashboard_user />} />
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/admin/*' element={<AppAdmin />} />
        <Route path='/shopping_cart' element={<ShoppingCart />} />
        <Route path='/checkout' element={<Form />} />
        <Route path='/foro' element={<ForoHome />} />
        <Route path='*' element={<Page404 />} />
        <Route path='/foro/profile/:email' element={<Foro_Profile/>} />
      </Routes>
      

      {
        (!location.pathname.includes('foro') && !location.pathname.includes('admin'))&&<Footer />
      }

    </>
  );
}

export default App;
