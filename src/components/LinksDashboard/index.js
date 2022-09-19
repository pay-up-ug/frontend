import React, { useState,useEffect } from "react"
import "./LinkDashboard.css"
import {
 Link
} from "react-router-dom";
import Header from "../Header";
import axios from "../../axios";
import Footer from "../Footer";
import Spinner from "../Spinner";
import MajorButton from "../MajorButton";
import Moment from 'moment';
import { connect } from "react-redux"

function LinksDashboard(props) {
//fetch links
const [loading, setLoading] = useState(false)
const [links, setLinks] = useState([])  
const [error, setErrors] = useState("") 
useEffect(() => {
   fetchLinks();
}, []);
const fetchLinks = () =>{
  setLoading(true);
  axios
  .post(`links`,{userId:props.user.userdata.id})
  .then((response) => {
    // console.log(response)
    setLinks(response.data.data)
    setLoading(false);
  }).catch((error) => {
    // console.log(error)
    setErrors("something went wrong")
    setLoading(false);
  });
}
 
  return (
    <div className="App">
     <Header/>
    
     <div className="LinkPad">
       <div className="HeadTittle3" >Payment links</div> 
       <Link
       to="/createlink"
       > 
       <MajorButton
          label="Generate new Link"
          className="NewLink"
          />
          </Link>
      </div>
      
     <div className="HolderBody">
      {loading?<div className="SpinnerM"><Spinner/></div> :
       links.length ===0 ? 
      <div className="SpinnerM">No links for you available</div>  :
      <>
      <div className="HeadTittle3 tableSection">Your links</div>
      <div className="tableSection">
      <table >
      <tbody>
      <tr>
        <th>Tittle</th>
        <th>Status</th>
        <th>Time & date</th>
        <th>Owner type</th>
        <th>Owner</th>
        <th>Cashed</th>
        <th>Amount</th>
        <th>Reciever</th>
        <th>Seller</th>
        <th>Deliverved</th>
        <th>Link</th>
      </tr>
      {error &&  <div className="errorPoint">
     {error}
     </div>}
     {links.map((element, index) => {
      
       return ( <tr key={index}>
        <td>{element.title}</td>
        <td>{Moment(element.createdAt).format('DD-MM-YYYY')}</td>
        <td>{element.status}</td>
        <td>{element.ownerType}</td>
        <td>{element.ownerId===element.sellerId?
        element.sellerName:element.ownerId===element.buyerId?element.buyerName:"Not right"}
        </td>
        <td>{element.cashed? "yes":"no"}</td>
        <td>{element.amount}</td>
        <td>{element.buyerName===""?"-----":element.buyerName}</td>
        <td>{element.sellerName===""?"-----":element.sellerName}</td>
        <td>{element.delivered?"yes":"no"}</td>
        <td><a href={`/link/${element._id}`} className="link">link</a></td>
        </tr>)
      })}
    </tbody>
   </table>

      </div>    
      {/* <div className="HeadTittle3 tableSection">Old links</div>
      <div className="tableSection">
      <table >
      <tr>
        <th>Tittle</th>
        <th>Time & date</th>
        <th>Owner type</th>
        <th>Owner</th>
        <th>Cashed</th>
        <th>Amount</th>
        <th>Reciever</th>
        <th>Seller</th>
        <th>Deliverved</th>
        <th>Link</th>
      </tr>
     <tr>
     <td>New shoes</td>
        <td>23/7/2022</td>
        <td>Seller</td>
        <td>khalifan</td>
        <td>false</td>
        <td>45,000</td>
        <td>-----</td>
        <td>khalifan</td>
        <td>false</td>
        <td className="link">http://localhost:3000/.</td>
    </tr>
   
   </table>
   
      </div>  */}
      </>
        }
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


export default connect(mapStateToProps)(LinksDashboard)