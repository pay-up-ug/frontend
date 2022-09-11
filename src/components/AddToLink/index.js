import React, { useState } from "react"
import "./AddToLink.css"
import Header from "../Header";
import Footer from "../Footer";
import SecondaryButton from "../SecondaryButton";
import TextInput from "../TextInput";
import Spinner from "../Spinner";

import { connect } from "react-redux"
import {
  fetchUser
} from "../../redux/user/user.actions"


function AddtoLink(props) {
    

  return (
    <div className="App">
     <Header/>
     <div className="PadMe">
     <div className="HeadTittle3">
     Payment Links/new shoes 
      </div>
     <div className="LinkBody2">
      <div className="PartOneHead">
      <div className="HeadTittle">Add your self to link as: Buyer</div> 
       </div>
       <div className="PartOne">  
       <div className="Entryform7">
       <div className="FieldInfor">
          Name
          <div className="textBar">
          <TextInput
           placeholder="ray"
           name="name"
           value=""
           className="fieldwid"
           onChange={() => {}}
          />
          </div>
          
        </div>
        <div className="FieldInfor">
          Phone (on mobile money)
          <div className="textBar">
          <TextInput
           placeholder="shoe"
           name="phoneNumber"
           value=""
           className="fieldwid"
           onChange={() => {}}
          />
          </div> 
        </div>
        <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButtonL"
          label="Upload cash  And confirm Link"
        />
        </div>
        </div> 
       </div>  
       <div className="PartOneLast">
        <div className="HeadTittle">
            Link Information
        </div>
        <div className="InforSection">
        <table >
      <tr>
        <th>Tittle</th>
        <td>New shoes</td>
     </tr>
     <tr>
        <th>Time & date</th>
        <td>23/7/2022</td>
     </tr>   
     <tr>
        <th>Owner type</th>
        <td>Seller</td>
    </tr>
    <tr>
        <th>Owner</th>
        <td>khalifan</td>
    </tr>
    <tr>
        <th>Cashed</th>
        <td>false</td>
    </tr>
    <tr>
        <th>Amount</th>
        <td>45,000</td>
    </tr>
    <tr>
        <th>Reciever</th>
        <td>-----</td>
    </tr>
    <tr>
        <th>Seller</th>
        <td>khalifan</td>
    </tr>
    <tr>
        <th>Deliverved</th>
        <td>false</td>
    </tr>
    <tr>
        <th>Link</th>
        <td className="link">http://localhost:3000/.</td>
    </tr>
  
   </table>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddtoLink)