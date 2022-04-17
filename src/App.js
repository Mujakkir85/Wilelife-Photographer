import { Route, Routes } from 'react-router-dom';
import './App.css';
import Notfound from './component/404/Notfound';
import Checkout from './component/Checkout/Checkout';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Blogs from './component/Blogs/Blogs';
import AboutMe from './component/AboutMe/AboutMe'


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/aboutme' element={<AboutMe></AboutMe>}></Route>
        <Route path='/servicecheckout/:id' element={<Checkout></Checkout>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
