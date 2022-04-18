import { Route, Routes } from 'react-router-dom';
import './App.css';
import Notfound from './component/404/Notfound';
import Checkout from './component/Checkout/Checkout';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Blogs from './component/Blogs/Blogs';
import AboutMe from './component/AboutMe/AboutMe'
import Login from './component/Login/Login'
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        {/* Require ath to protect private route */}
        <Route path='/servicecheckout/:id'
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
