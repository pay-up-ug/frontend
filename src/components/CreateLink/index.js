import React, { useState } from "react"
import "./CreateLink.css"
import Header from "../Header";
import Footer from "../Footer";
import SecondaryButton from "../SecondaryButton";
import TextInput from "../TextInput";
import Spinner from "../Spinner";
import axios from "../../axios";
import {
  Navigate
} from "react-router-dom";
import { connect } from "react-redux"

function CreateLink(props) {
    const [ selected , setSelected] = useState("");
    const [creator, setCreator] = useState(props.user.userdata.name)
  const [title, setTitle] = useState("")
  const [phone, setPhone] = useState(props.user.userdata.contact)
  const [amount, setAmount] = useState("")
  const [loading,setLoading] = useState("")

    const handleSelectChange = (e) =>{
        setSelected(e.target.value);
      }
   const AddNewLink = ()=>{
    if(phone!=="" && amount>0 && title!==""){
    let linkData
    if(selected==="Seller"){
     linkData = {
      title:title,
      sellerContact:phone,
      description:"sellerLink",
      ownerId:props.user.userdata.id,
      ownerType:"seller",
      sellerName:creator,
      sellerId:props.user.userdata.id,
      amount:amount
    }
    setLoading(true);
    axios
    .post(`links/createseller`,linkData)
    .then((response) => {
      setLoading(false);
      window.location.href ="/linksDashboard" 
    }).catch((error) => {
      // console.log(error)
      alert("something went wrong")
      setLoading(false);
    });

     }else if(selected==="Buyer"){
    linkData = {
      title:title,
      buyerContact:phone,
      description:"buyer link",
      ownerId:props.user.userdata.id,
      ownerType:"buyer",
      buyerName:creator,
      buyerId:props.user.userdata.id,
      amount:amount
    }
    setLoading(true);
    axios
    .post(`links/createbuyer`,linkData)
    .then((response) => {
      setLoading(false);
      window.location.href ="/linksDashboard" 
    }).catch((error) => {
      alert("something went wrong")
      // console.log(error)
      setLoading(false);
    });

    }else{
      alert("something is off")
    }
  }else {
    alert("fill fields correctly")
  }
}
   

  return (
    <div className="App">
     <Header/>
     <div className="PadMe">
     <div className="HeadTittle3">
     New Payment Links 
      </div>
     <div className="LinkBody">
      <div className="PartOneHeadC">
      <div className="HeadTittle">Create new link</div> 
       </div>
       <div className="PartOne">  
       <div className="Entryform">
       <div className="FieldInfor">
          Creator
          <div className="textBar">
          <TextInput
           placeholder="ray"
           name="name"
           value={creator}
           className="fieldwid"
          />
          </div>
          
        </div>
        <div className="FieldInfor">
          Link Tittle
          <div className="textBar">
          <TextInput
           placeholder="shoe"
           name="tittle"
           value={title}
           className="fieldwid"
           onChange={ (event) => {setTitle(event.target.value)}}
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
           name="phone"
           value={phone}
           className="fieldwid"
           onChange= {(event) => {setPhone(event.target.value)}}
          />
          </div> 
        </div>
        <div className="FieldInfor">
          Amount
          <div className="textBar">
          <TextInput
           placeholder="30000"
           name="amount"
           type="Number"
           value={amount}
           className="fieldwid"
           onChange={(event) => {setAmount(event.target.value)}}
          />
          </div> 
        </div>
        <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButton"
          label={loading?<Spinner/>:"Create Link"}
          onClick={()=>{AddNewLink()}}
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