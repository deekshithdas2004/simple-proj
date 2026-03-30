import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';
import Navbar from './Navbar.jsx';
import CreateRequirement from './CreateRequirement.jsx';
import MyRequest from './MyRequest.jsx';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='contact-us' element={<ContactUs/>} />
        <Route path='/create-request' element={<CreateRequirement/>}></Route>
        <Route path='/my-orders' element={<MyRequest/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
