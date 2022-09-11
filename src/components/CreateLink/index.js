import React, { useState } from "react"
import "./CreateLink.css"
import Header from "../Header";
import Footer from "../Footer";
import SecondaryButton from "../SecondaryButton";
import TextInput from "../TextInput";
import Spinner from "../Spinner";

import { connect } from "react-redux"

function CreateLink(props) {
    const [ selected , setSelected] = useState("");
    const handleSelectChange = (e) =>{
        setSelected(e.target.value);
      }
  return (
    <div className="App">
     <Header/>
     <div className="PadMe">
     <div className="HeadTittle3">
     New Payment Links 
      </div>
     <div className="LinkBody">
      <div className="PartOneHead">
      <div className="HeadTittle">Create new link</div> 
       </div>
       <div className="PartOne">  
       <div className="Entryform">
       <div className="FieldInfor">
          Creator
          <div className="textBar">
          <TextInput
           placeholder="ray"
           name="creator"
           value=""
           className="fieldwid"
           onChange={() => {}}
          />
          </div>
          
        </div>
        <div className="FieldInfor">
          Link Tittle
          <div className="textBar">
          <TextInput
           placeholder="shoe"
           name="tittle"
           value=""
           className="fieldwid"
           onChange={() => {}}
          />
          </div> 
        </div>
        <div className="FieldInfor">
          Seller/Buyer
          <div >
          <select id="SelectSection" 
          value={selected} 
          onChange={handleSelectChange}>
            <option value="Seller">Seller</option>
            <option value="Buyer">Buyer</option>
          </select> 
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
        <div className="FieldInfor">
          Amount
          <div className="textBar">
          <TextInput
           placeholder="30000"
           name="amount"
           value=""
           className="fieldwid"
           onChange={() => {}}
          />
          </div> 
        </div>
        <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButton"
          label="Create Link"
        />
        </div>
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateLink)