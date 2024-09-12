import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Adduser from './component/User';
import Alluser from './component/AllUser';
import Edit from './component/Edit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/adduser' element={<Adduser />} />
          <Route path='/all' element={<Alluser />} />
          <Route exact path='/edit/:id' element={<Edit/>} />

          <Route path='/' element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
