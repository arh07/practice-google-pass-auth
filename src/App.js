
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Orders from './component/Orders/Orders';
import Products from './component/Products/Products';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Register from './Register/Register';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home> </Home>}>Home</Route>
        <Route path='/login' element={<Login></Login>}>Login</Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/order' element={<RequireAuth><Orders></Orders></RequireAuth>}></Route>
      </Routes>

    </div>
  );
}

export default App;
