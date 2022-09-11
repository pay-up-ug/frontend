import React from "react"
import "./NotFound.css"
import Header from "../Header";
import Footer from "../Footer";

import { ReactComponent as Logo } from "../../assets/images/bigLogo.svg";

function NoPage(props) {
  return (
    <div className="App">
     <Header/>
    <div className="BlankPage">
        <Logo/>
       <div className="HeadTittle">page not found here 404</div>
    </div>
     <Footer/>
    </div>
  )
}



export default NoPage