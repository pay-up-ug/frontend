import React, { useState } from "react"
import "./SettleLink.css"
import Header from "../Header";
import Footer from "../Footer";
import SecondaryButton from "../SecondaryButton";
import TextInput from "../TextInput";
import Spinner from "../Spinner";

import { connect } from "react-redux"
import {
  fetchUser
} from "../../redux/user/user.actions"

function Settlelink(props) {
    const [ selected , setSelected] = useState("");
    const handleSelectChange = (e) =>{
        setSelected(e.target.value);
      }
  return (
    <div className="App">
     <Header/>
     <div className="PadMe">
     <div className="HeadTittle3">
     Payment Links/new shoes 
   
    </div>
  
     <div className="LinkBodyyp">
      <div className="PartOneHead">
      <div className="HeadTittle">Settle link</div>
       </div>
       <div className="PartOne"> 
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
        <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButton"
          label="Settle Link"
        />
        </div>
       </div>         
     </div>
     <div className="LinkBodyyp">
    <div className="HeadTittle">Link Settings</div>
    <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButton"
          label="Return Cash"
        />
    </div>
    <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButton"
          label="Edit Link"
        />
    </div>
    <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButton"
          label="Cancel link"
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

export default connect(mapStateToProps, mapDispatchToProps)(Settlelink)