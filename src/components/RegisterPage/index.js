import React,{useEffect,useState} from "react"
import "./RegisterPage.css"
import Header from "../Header";
import Footer from "../Footer";
import SecondaryButton from "../SecondaryButton";
import TextInput from "../TextInput";
import Spinner from "../Spinner";
import { ReactComponent as Logo } from "../../assets/images/bigLogo.svg";
import { connect } from "react-redux"
import {
  Register,clearUserState
} from "../../redux/user/user.actions"

function RegisterPage(props) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [contact, setContact] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
 
  useEffect(() => {
   // props.clearUserState()
    if(props.user.userFetched && !props.user.userFailed){
      window.location.href = `/dashboard`;
    }
  }, [props]);
  const RegisterUser = () => {
    const user ={
      email:email.trim(),
      password:password.trim(),
      contact:contact.trim(),
      name:name.trim()
    }
    if(password !== confirmPassword){
      setError("passwords must match")
      return
    }else if(email!=="" && password !=="" && contact !=="" && name!==""){
     props.Register(user);
    }
  }
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
           value={email}
           onChange={(event) => {setEmail(event.target.value)}}
          />
          </div>
        </div>
        <div className="FieldInfor">
          Name
          <div className="textBar">
          <TextInput
           placeholder="name"
           name="name"
           value={name}
           onChange={(event) => {setName(event.target.value)}}
          />
          </div>
        </div>
        <div className="FieldInfor">
          Contact
          <div className="textBar">
          <TextInput
           placeholder="name"
           name="contact"
           value={contact}
           onChange={(event) => {setContact(event.target.value)}}
          />
          </div>
        </div>
        <div className="FieldInfor">
          Password
          <div className="textBar">
          <TextInput
           placeholder="password"
           name="password"
           type="password"
           value={password}
           onChange={(event) => {
            if(error){
              setError("")
            }
            setPassword(event.target.value)}}
          />
          </div>
        </div>
        <div className="FieldInfor">
          Confirm Password
          <div className="textBar">
          <TextInput
           placeholder="confirm password"
           name="confirmpassword"
           type="password"
           value={confirmPassword}
           onChange={(event) => {
            if(error){
              setError("")
            }
            setConfirmPassword(event.target.value)
          }}
          />
          </div>
        </div>
        <div className="errorPoint">
         {props.user.error && props.user.error}
         {error && error}
        </div>
        <SecondaryButton
          className="SecondaryButton"
          label={props.user.userFetching?<Spinner/>:"Register"}
          onClick={() => {RegisterUser()}}
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
const mapDispatchToProps =  {
    Register,
    clearUserState
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)