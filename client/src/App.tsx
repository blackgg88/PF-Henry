import { Route, Routes } from 'react-router-dom';
import Shop from './Shop/Shop';
import News from './components/News';

import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' />
        <Route path='/register' />
        <Route path='/shop' element={<Shop />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
