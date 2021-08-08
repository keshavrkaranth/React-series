import React from "react";
import './index.css'
import './scripts'
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Protfolio from "./components/protfolio";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import ProtfolioModal from "./components/ProtfolioModal";
import Modal from './components/modals/modal'


const App = ( )=>{
  return(
      <div>
            <NavBar/>
            <Header/>
             <Protfolio/>
            <About/>
          <Contact/>
          <Footer/>
          <Copyright/>
          <ProtfolioModal/>
          <Modal/>
      </div>
  )
}

export default App