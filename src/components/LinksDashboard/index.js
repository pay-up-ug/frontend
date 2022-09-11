import React from "react"
import "./LinkDashboard.css"
import Header from "../Header";
import Footer from "../Footer";
import MajorButton from "../MajorButton";
import { connect } from "react-redux"


function LinksDashboard(props) {
  return (
    <div className="App">
     <Header/>
     <div className="LinkPad">
       <div className="HeadTittle3" >Payment links</div>  
       <MajorButton
          label="Generate new Link"
          className="NewLink"
          />
      </div>
     <div className="HolderBody">
      <div className="HeadTittle3 tableSection">Your active links</div>
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

      </div>    
      <div className="HeadTittle3 tableSection">Your old links</div>
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
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksDashboard)