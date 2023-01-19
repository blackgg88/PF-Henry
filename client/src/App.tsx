import { Route, Routes } from 'react-router-dom';
// import restProvider from 'ra-data-simple-rest';

import News from './components/News';
import Shop from './Shop/Shop';
import Home from './components/home/Home';
import TestMp from './components/testMp';
import { Dashboard_user } from './components/dashboard_user/Dashboard_user';
import Detail from './components/details/Detail';
import AppAdmin from './components/dashboard/AppAdmin';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' />
        <Route path='/shop' element={<Shop />} />
        <Route path='/test' element={<TestMp />} />
        <Route path='/news' element={<News />} />
        <Route path='/profile' element={<Dashboard_user />} />
        <Route path='/product/:id' element={<Detail />} />
        <Route path='/admin/*' element={<AppAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
