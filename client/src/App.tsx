import { Route, Routes } from 'react-router-dom';
// import restProvider from 'ra-data-simple-rest';

import News from './components/News';
import Shop from './Shop/Shop';
import Home from './components/Home';
import TestMp from './components/testMp';
import AppAdmin from './components/dashboard/AppAdmin'

{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment
            @ts-ignore */}


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
        <Route path='/admin/*' element={<AppAdmin />}/> 
      </Routes>
      
    </div>
  );
}

export default App;
