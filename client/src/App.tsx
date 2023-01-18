import { Route, Routes } from 'react-router-dom';

import News from './components/News';
import Shop from './Shop/Shop';
import Home from './components/home/Home';
import TestMp from './components/testMp';
import { Dashboard_user } from './components/dashboard_user/Dashboard_user';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' />
        <Route path='/register' />
        <Route path='/shop' element={<Shop />} />
        <Route path='/test' element={<TestMp />} />
        <Route path='/news' element={<News />} />
        <Route path='/profile' element={<Dashboard_user/>} />
      </Routes>
    </div>
  )
}

export default App;
