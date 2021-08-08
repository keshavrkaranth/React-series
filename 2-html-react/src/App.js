import React from "react";
import NavBar from "./Components/NavBar";
import Jumbotron from "./Components/Jumbotron";
import Feature from "./Components/Feature";
import CardSection from "./Components/cardSection";
import Footer from "./Components/Footer";


const App = () =>{
    return(
       <div>
           <NavBar/>
           <Jumbotron />
           <Feature/>
           <CardSection/>
           <Footer />
       </div>
    )
}

export default App