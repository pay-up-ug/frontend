import React from "react"
import "./RegisterPage.css"
import Header from "../Header";
import Footer from "../Footer";
import SecondaryButton from "../SecondaryButton";
import TextInput from "../TextInput";
import Spinner from "../Spinner";
import { ReactComponent as Logo } from "../../assets/images/bigLogo.svg";
import { connect } from "react-redux"
// import {
//   fetchUser
// } from "../../redux/user/user.actions"

function RegisterPage(props) {
  return (
    <div className="App">
     <Header/>
     <div className="LandingBody">
      <div className="LeftLander">
      <div className="LoginBox2">
        <div className="UpperText">Register</div>
        <div className="FieldInfor">
          E-mail
          <div className="textBar">
          <TextInput
           placeholder="e-mail"
           name="email"
           value=""
           onChange={() => {}}
          />
          </div>
        </div>
        <div className="FieldInfor">
          Name
          <div className="textBar">
          <TextInput
           placeholder="name"
           name="name"
           value=""
           onChange={() => {}}
          />
          </div>
        </div>
        <div className="FieldInfor">
          Contact
          <div className="textBar">
          <TextInput
           placeholder="name"
           name="name"
           value=""
           onChange={() => {}}
          />
          </div>
        </div>
        <div className="FieldInfor">
          Password
          <div className="textBar">
          <TextInput
           placeholder="password"
           name="password"
           value=""
           onChange={() => {}}
          />
          </div>
        </div>
        <div className="FieldInfor">
          Confirm Password
          <div className="textBar">
          <TextInput
           placeholder="password"
           name="password"
           value=""
           onChange={() => {}}
          />
          </div>
        </div>
        <SecondaryButton
          className="SecondaryButton"
          label="Register"
        />
      </div>
       </div>
       <div className="RightLanderR">  
       <Logo className="PayL"/>  
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)