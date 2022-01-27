// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from '../components/Nav';
import MainSection from '../components/MainSection';
import Workers from '../components/Workers';
import Offerts from '../components/Offerts';
import Footer from '../components/Footer';

{/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" type='text/css' > <!--fonts link -->
	
  <script src="https://kit.fontawesome.com/d61d3b27e9.js" crossorigin="anonymous"></script> <!--icons link --> */}


function App() {
  return (
    <Nav/>,
    <MainSection/>,
    <Workers/>,
    <Offerts/>,
    <Footer/>
  )
}

export default App;
