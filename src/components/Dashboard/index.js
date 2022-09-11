import React from "react"
import "./Dashboard.css"
import Header from "../Header";
import Footer from "../Footer";
import MajorButton from "../MajorButton";

import { ReactComponent as Gateway } from "../../assets/images/gateway.svg";
import { ReactComponent as Links } from "../../assets/images/links.svg";
import { connect } from "react-redux"
import {
  fetchUser
} from "../../redux/user/user.actions"

function DashBoard(props) {
  return (
    <div className="App">
      {/* <div>user: {props.user.userFetching}</div>
      <button onClick={() => props.fetchUser()}>User</button> */}
     <Header/>
     <div className="HeadTittle2">
        Dashboard
      </div>
     <div className="LandingBody">
      <div className="LeftLander">
      <div className="HeadTittle3">
        The GateWay
      </div>
        <div className="Fronttext2">
        This Api enables you add payments to your e-commerce platform, 
         Genrate your Api keys and browse through our Api docs for assistance on  how to implement them.
        Thanks for chosing Pay-up
        </div>
         <div className="ViewButton">
          <MajorButton
          label="View API Dashboard"
          />
         </div>
        <Gateway className="Gateway"/>
       </div>
       <div className="RightLander">
      <div>
       <Links className="PayL2"/>
      </div>  
      <div className="HeadTittle4">
        Payment Links
      </div>
        <div className="Fronttext4">
        Payment Links are here to assist the small business owners and 
        their customers have more re-assured bussiness with certainity in payment
         for the sellers and power of choice on delievered products from buyers.
        It can either be initiated by the buyer or seller
        </div>
         <div className="ViewButton4">
          <MajorButton
          label="View Payments Link"
          />
         </div>
     
       </div>
     
        
     </div>
     <Footer/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)