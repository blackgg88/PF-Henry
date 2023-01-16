import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './Shop/Shop';
import TestMp from './components/testMp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalogue' />
        <Route path='/register' />
        <Route path='/shop' element={<Shop />} />
        <Route path='/test' element={<TestMp />} />
      </Routes>
    </div>
  );
}

export default App;
