import React, { useState,useEffect } from "react"
import "./SettleLink.css"
import {  useParams,useNavigate  } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import SecondaryButton from "../SecondaryButton";
import MajorButton from "../MajorButton";
import axios from "../../axios";
import Moment from 'moment';
import Spinner from "../Spinner";
import { connect } from "react-redux"



function Settlelink(props) {
    const { linkID } = useParams(); 
    const navigate = useNavigate();

    const [fetchLink,setfetchLink] = useState(false);
    const [linkError,setLinkError] = useState("");
    const [Link,setLink] = useState({});
    const [settlingLink,setSettlingLink] = useState(false);
    const [returningCash,setReturningCash] = useState(false);
    const [killingLink,setKillingLink] = useState(false);
    const [refreshLink,setRefreshLink] = useState(false);
    useEffect(() => {
      //console.log(linkID)
      fetchLinks();
   }, []);
    const fetchLinks = ()=>{
     setfetchLink(true)
      axios
      .get(`links/${linkID}`)
      .then((response) => {
        setLink(response.data.data)
        setfetchLink(false)
      }).catch((error) => {
       // alert("something went wrong")
       setLinkError("something went wrong")
        setfetchLink(false)
      });
    }
    const AddToLink = () => {
      navigate(`/addtolink/${linkID}`,{state:{LinkInfor:Link}});
      //<Navigate to={`/addtolink/${Link.id}`} />
    }
    const SettleBuyerLink = ()=>{
      let linkData ={
        linkId:linkID,
        userId:props.user.userdata.id
      }
      setSettlingLink(true);
      axios
      .put(`links/received`,linkData)
      .then((response) => {
        setSettlingLink(false);
        window.location.href ="/linksDashboard" 
      }).catch((error) => {
        alert("something went wrong")
        // console.log(error)
         setSettlingLink(false);
      });
    }
    const SettleSellerLink = ()=>{
      let linkData ={
        linkId:linkID,
        userId:props.user.userdata.id
      }
      setSettlingLink(true);
      axios
      .put(`links/delivered`,linkData)
      .then((response) => {
        setSettlingLink(false);
        window.location.href ="/linksDashboard" 
      }).catch((error) => {
        alert("something went wrong")
        // console.log(error)
         setSettlingLink(false);
      });
    }
    const ReturnLinkCash = ()=>{
      let linkData ={
        linkId:linkID,
        userId:props.user.userdata.id
      }
      setReturningCash(true);
      axios
      .post(`links/return`,linkData)
      .then((response) => {
        setReturningCash(false);
        window.location.href ="/linksDashboard" 
      }).catch((error) => {
        alert("something went wrong")
        setReturningCash(false);
      });
    }
    const CancelLink = ()=>{
      setKillingLink(true);
      axios
      .patch(`links/kill/${Link.id}`)
      .then((response) => {
        setKillingLink(false);
        window.location.href ="/linksDashboard" 
      }).catch((error) => {
        alert("something went wrong")
        console.log(error)
        setKillingLink(false);
      });
    }
    const RefreshLink = () =>{
      setRefreshLink(true);
      axios 
      .patch(`links/cashrefresh/${linkID}`)
      .then((response) => {
        setRefreshLink(false)
        window.location.href ="/linksDashboard" 
      }).catch((error) => {
        alert("something went wrong")
        setRefreshLink(false);
      });
    }
  return (
    <div className="App">
     <Header/>
     <div className="PadMe">
     <div className="HeadTittle3">
     Payment Links/new shoes 
    </div>
  
     <div className="LinkBodyyp">
      <div className="PartOneHeadS">
      <div className="HeadTittle">{`Link-${linkID}`}</div>
      {refreshLink?<Spinner/>: <div 
      onClick={()=>{RefreshLink()}}
      className="linkrefreash">Refresh link</div>}
       </div>
       <div className="PartOne"> 
       <div className="HeadTittle">
            Link Information
        </div>
        <div className="InforSection">
         {fetchLink?<div className="SpinnerM"><Spinner/></div> :<table >
          <tbody>
      <tr>
        <th>Tittle</th>
        <td>{Link.title}</td>
     </tr>
     <tr>
        <th>Time & date</th>
        <td>{Moment(Link.createdAt).format('DD-MM-YYYY')}</td>
     </tr>  
     <tr>
        <th>Status</th>
        <td>{Link.status}</td>
    </tr> 
     <tr>
        <th>Owner type</th>
        <td>{Link.ownerType}</td>
    </tr>
    <tr>
        <th>Owner</th>
        <td>{Link.ownerId===Link.sellerId?
        Link.sellerName:Link.ownerId===Link.buyerId?Link.buyerName:"Not right"}</td>
    </tr>
    <tr>
        <th>Cashed</th>
        <td>{Link.cashed? "yes":"no"}</td>
    </tr>
    <tr>
        <th>Amount</th>
        <td>{Link.amount}</td>
    </tr>
    <tr>
        <th>Reciever</th>
        <td>{Link.buyerName===""?"-----":Link.buyerName}</td>
    </tr>
    <tr>
        <th>Seller</th>
        <td>{Link.sellerName===""?"-----":Link.sellerName}</td>
    </tr>
    <tr>
        <th>Delivered</th>
        <td>{Link.delivered?"yes":"no"}</td>
    </tr>
    <tr>
        <th>Link</th>
        <td className="link">{window.location.href}</td>
    </tr>
    </tbody>
         </table>}
         {linkError &&  <div className="errorPoint">
        {linkError}
         </div>}
        </div>
        {(!Link.delivered 
          && props.user.userdata.id === Link.sellerId &&
           Link.status === "active") && (
           <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButtonL"
          label={settlingLink?<Spinner/>:"Confirm You Delivered"}
          onClick={()=>{SettleSellerLink()}}
        />
        </div>)}
        {(!Link.recieved 
          && props.user.userdata.id === Link.buyerId &&
           Link.status === "active") && (
            <>
        <div className="SecAlign">
           <SecondaryButton
           className="SecondaryButtonL"
          label={settlingLink?<Spinner/>:"Confirm You Recieved"}
          onClick={()=>{SettleBuyerLink()}}
        />
       
        </div>
         <>On Confirming this, money will automatically be sent to the seller</>
         </>
        )}
        {(props.user.userdata.id !== Link.sellerId 
           && props.user.userdata.id !== Link.buyerId
           &&(Link.sellerId === "" || Link.buyerId ==="")
             && Link.status === "inactive") 
             && (<div className="SecAlign">
            
        <MajorButton
          className="SecondaryButton"
          label="Add You Self"
          onClick={()=>{AddToLink()}}
        />
        </div>)}
       </div>         
     </div>
     {(Link.status==="active" || Link.status==="inactive") && <div className="LinkBodyyp">
    <div className="HeadTittle">Link Settings</div>
   {props.user.userdata.id === Link.buyerId && <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButton"
          label={returningCash?<Spinner/>:"Return Cash"}
          onClick={()=>{ReturnLinkCash()}}
        />
    </div>}
    {/* <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButton"
          label="Edit Link"
        />
    </div> */}
    {(Link.status === "inactive" && props.user.userdata.id === Link.ownerId) && <div className="SecAlign">
        <SecondaryButton
          className="SecondaryButton"
          label={killingLink?<Spinner/>:"Cancel link"}
          onClick={()=>{CancelLink()}}
        />
    </div>}
    </div>}
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


export default connect(mapStateToProps)(Settlelink)