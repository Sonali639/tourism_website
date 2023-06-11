/* eslint-disable  */ 
import './App.css';
import Header from'./Components/Header';
import Footer from'./Components/Footer';
import About from'./Components/About-us';
import Home from'./Components/Home';
import Gallery from './Components/Gallery';
import Contact from'./Components/Contact-us';
import TourList from'./Components/TourList';
import SingleCardDetail from'./Components/SingleCard';
import BackToTopButton from'./Components/BackToTopBtn';
import Error from'./Components/Error';
import TourDetails from'./Components/TourDetails';
import HolyPlace from'./Components/HolyPlaces';
import Login from'./Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About-us" element={<About/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/TourList" element={<TourList/>}/>
      <Route path="/SingleCard" element={<SingleCardDetail/>}/>
      <Route path="/BackToTopBtn" element={<BackToTopButton/>}/>
      <Route path="/Error" element={<Error/>}/>
      <Route path='TourDetails' element={<TourDetails/>}/>
      <Route path='/HolyPlace' element={<HolyPlace/>}/>
      <Route path='/Login' element={<Login/>}/>

      
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  );
}

export default App;
