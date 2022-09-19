import React, { useState } from "react"
import "./AddToLink.css"
import Header from "../Header";
import Footer from "../Footer";
import SecondaryButton from "../SecondaryButton";
import axios from "../../axios";
import TextInput from "../TextInput";
import Moment from 'moment';
import Spinner from "../Spinner";
import { connect } from "react-redux"
import { useLocation } from "react-router-dom";

function AddtoLink(props) {
   const location = useLocation()
   const { LinkInfor } = location.state
   const [phone, setPhone] = useState(props.user.userdata.contact)
   const [name, setName] = useState(props.user.userdata.name);
   const [loading, setLoading] = useState(false);

  const AddUsertoLink =()=>{
    if(LinkInfor.sellerId==="" || LinkInfor.buyerId===""){
      let linkData
      if(LinkInfor.sellerId==="" && LinkInfor.buyerId!==""){
       linkData = {
        linkId:LinkInfor._id, 
        sellerId:props.user.userdata.id,
        sellerName:name,
        sellerContact:phone
      }
      setLoading(true);
      axios
      .post(`links/addseller`,linkData)
      .then((response) => {
        setLoading(false);
        window.location.href ="/linksDashboard" 
      }).catch((error) => {
         console.log(error)
        alert("something went wrong")
        setLoading(false);
      });
       }else if(LinkInfor.sellerId!=="" && LinkInfor.buyerId===""){
      linkData={
          linkId:LinkInfor._id, 
          buyerId:props.user.userdata.id,
          buyerName:name,
          buyerContact:phone
      }
      setLoading(true);
      axios
      .post(`links/addbuyer`,linkData)
      .then((response) => {
        setLoading(false);
        window.location.href ="/linksDashboard" 
      }).catch((error) => {
        alert("something went wrong")
         console.log(error)
        setLoading(false);
      });
      }else{
        alert("something is off")
      }
    }else {
      alert("Cant add to this link")
    }
   }

  return (
    <div className="App">
     <Header/>
     <div className="PadMe">
     <div className="HeadTittle3">
     Payment Links/new shoes 
      </div>
     <div className="LinkBody2">
      <div className="PartOneHead">
      <div className="HeadTittle">Add your self to link as:
       {LinkInfor.buyerId==="" && "a Buyer"} {LinkInfor.sellerId==="" && "a Seller"}</div> 
       </div>
       <div className="PartOne">  
       <div className="Entryform7">
       <div className="FieldInfor">
          Name
          <div className="textBar">
          <TextInput
           placeholder="ray"
           name="name"
           value={name}
           className="fieldwid"
          />
          </div>
          
        </div>
       { LinkInfor.buyerId==="" && <div className="warning">
          Ps: since your the buyer, 
          Your going to add cash ({LinkInfor.amount})UGX to the link.
        </div>}
        <div className="FieldInfor">
          Phone (on mobile money)
          <div className="textBar">
          <TextInput
           placeholder="shoe"
           name="phoneNumber"
           value={phone}
           className="fieldwid"
           onChange={(e) => {setPhone(e.target.value)}}
          />
          </div> 
        </div>
        <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButtonL"
          label={loading?<Spinner/>:
          LinkInfor.buyerId===""?"Upload cash And Join Link":
          LinkInfor.sellerId===""?"Join Link":"Can't Join Link"}
          onClick={()=>{AddUsertoLink()}}
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
        <tbody>
      <tr>
        <th>Tittle</th>
        <td>{LinkInfor.title}</td>
     </tr>
     <tr>
        <th>Time & date</th>
        <td>{Moment(LinkInfor.createdAt).format('DD-MM-YYYY')}</td>
     </tr>
     <tr>
        <th>Status</th>
        <td>{LinkInfor.status}</td>
    </tr>   
     <tr>
        <th>Owner type</th>
        <td>{LinkInfor.ownerType}</td>
    </tr>
    <tr>
        <th>Owner</th>
        <td>{LinkInfor.ownerId===LinkInfor.sellerId?
        LinkInfor.sellerName:LinkInfor.ownerId===LinkInfor.buyerId?
        LinkInfor.buyerName:"Not right"}</td>
    </tr>
    <tr>
        <th>Cashed</th>
        <td>{LinkInfor.cashed? "yes":"no"}</td>
    </tr>
    <tr>
        <th>Amount</th>
        <td>{LinkInfor.amount}</td>
    </tr>
    <tr>
        <th>Reciever</th>
        <td>{LinkInfor.buyerName===""?"-----":LinkInfor.buyerName}</td>
    </tr>
    <tr>
        <th>Seller</th>
        <td>{LinkInfor.sellerName===""?"-----":LinkInfor.sellerName}</td>
    </tr>
    <tr>
        <th>Deliverved</th>
        <td>{LinkInfor.delivered?"yes":"no"}</td>
    </tr>
    <tr>
        <th>Link</th>
        <td className="link">{`${window.location.hostname}/link/${LinkInfor._id}`}</td>
      </tr>
       </tbody>  
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddtoLink)