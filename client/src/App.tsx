import { Route, Routes } from 'react-router-dom';

import News from './components/News';
import Shop from './Shop/Shop';
import Home from './components/Home';
import TestMp from './components/testMp';
import News from './components/News'

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
      </Routes>
    </div>
  )
}

export default App;
