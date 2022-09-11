import React from "react"
import "./LoginPage.css"
import Header from "../Header";
import Footer from "../Footer";
import MajorButton from "../MajorButton";
import SecondaryButton from "../SecondaryButton";
import TextInput from "../TextInput";
import Spinner from "../Spinner";
import { ReactComponent as Rotate } from "../../assets/images/rotate.svg";
import { ReactComponent as Pay } from "../../assets/images/pay.svg";
import { connect } from "react-redux"
import {
  fetchUser
} from "../../redux/user/user.actions"

function LoginPage(props) {
  return (
    <div className="App">
      {/* <div>user: {props.user.userFetching}</div>
      <button onClick={() => props.fetchUser()}>User</button> */}
     <Header/>
     <div className="LandingBody">
      <div className="LeftLander">
      <div>
      <div className="HeadTittle99">
        Pay-up
      </div>
      <div className="Fronttext">
        Uganda’s very own first payment
         middle man. 
        </div>
      </div>
        <div className="Fronttext2">
        We simply assist you collect your 
        cash from your users in Ugandan friendly payment 
        methods with accessible  fast support. 
        </div>
         <div className="StartButton">
          <MajorButton
          label="Get Started"
          />
         </div>
        <Rotate/>
       </div>
       <div className="RightLander">
      <div>
       <Pay className="PayL"/>
      </div>  
      <div className="LoginBox">
        <div className="UpperText">Login</div>
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
        <SecondaryButton
          className="SecondaryButton"
          label="login"
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)