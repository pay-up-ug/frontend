import React from "react"
import "./ApiDashboard.css"
import Header from "../Header";
import Footer from "../Footer";
import MajorButton from "../MajorButton";
import { connect } from "react-redux"

function ApiDashBoard(props) {
  return (
    <div className="App">
      {/* <div>user: {props.user.userFetching}</div>
      <button onClick={() => props.fetchUser()}>User</button> */}
     <Header/>
     <div className="Tittle2">
       <div className="HeadTittle3" >API Control</div>
       <div className="BalanceSection">
       <MajorButton
          label="Go Live"
        />
        <div className="BalanceItem">
        <div>Environment: </div>
        <div>Testing</div>
        </div>
        <div className="BalanceItem">
        <div>Test Wallet: </div>
        <div>0 UGX</div>
        </div>
        </div>
      </div>
     <div className="HolderBody">
      <div className="LeftLander">
      <div className="HeadTittle3">
        KEYS
      </div>
        <div className="Fronttext5">
        <div className="BalanceItem5">
        <div>Public key: </div>
        <div>mkfjfdjfhadhiuhfdahfadfjnadsbhf</div>
        </div>
        <div className="BalanceItem2">
        <div>Private key: </div>
        <div>********************</div>
        <MajorButton
          label="View"
          />
        </div>
        
        </div>
         <div className="ViewButton">
          <MajorButton
          label="Re-generate keys"
          />
         </div>
       
       </div>  
       <div className="LeftLander">
      <div className="HeadTittle3">
      YOUR API RECORDS
      </div>
        <div className="text53">
          No records Yet
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
  return { }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiDashBoard)