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
import ForoHome from './components/foro/foroHome';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <>
      {!['/admin'].includes(location.pathname) && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' />
        <Route path='/shop' element={<Shop />} />
        <Route path='/news' element={<News />} />
        <Route path='/profile' element={<Dashboard_user />} />
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/admin/*' element={<AppAdmin />} />
        <Route path='/shopping_cart' element={<ShoppingCart />} />
        <Route path='/checkout' element={<Form />} />
        <Route path='/foro' element={<ForoHome />} />
      </Routes>
      {!['/admin', '/foro'].includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
