import React,{ useState,useEffect } from "react"
import "./ApiDashboard.css"
import Header from "../Header";
import Footer from "../Footer";
import MajorButton from "../MajorButton";
import { connect } from "react-redux"
import 
   genarateApiKeys, {clearKeysState}
 from "../../redux/OpenApiKeys/openapi.actions"
 import {
  clearUserState
} from "../../redux/user/user.actions"
import Spinner from "../Spinner";

function ApiDashBoard(props) {
  const { user } = props;
  const [secret, setSecret] = useState(false);
  useEffect(() => {
    if(!props.apiKeys.isGenaratingKeys &&
       props.apiKeys.isGenerated && !props.apiKeys.FailedToGenerated){
        localStorage.clear();
        props.clearUserState();
        props.clearKeysState();
        window.location.href = "/login";
    }
  }, [props]);

  return (
    <div className="App">  
    
     <Header/>
     <div className="Tittle2">
       <div className="HeadTittle3" >API Control</div>
       <div className="BalanceSection">
       <MajorButton
          label="Go Live"
        />
        <div className="BalanceItem">
        <div>Environment: </div>
        <div>{user.userdata.environment}</div>
        </div>
        <div className="BalanceItem">
        <div>Test Wallet: </div>
      <div>{`${user.userdata.testBalance} UGX`}</div>
        </div>
        </div>
      </div>
     <div className="HolderBody">
      <div className="LeftLander">
      <div className="HeadTittle3">
        KEYS
      </div>
      {(user.userdata.publicKey !=="" && user.userdata.privateKey !=="") ? 
     ( <div className="KeysDiv">
      <div className="BalanceItem5">
      <div>Public key: </div>
      <div className="smallText">{user.userdata.publicKey}</div>
      </div>
      <div className="BalanceItem2">
      <div>Private key: </div>
      <div className="smallText">{secret?user.userdata.privateKey:"********************"}</div>
      <div
      className="viewlink"
        onClick={()=>{setSecret(!secret)}}
        >
        {secret?"Hide":"View"}
        </div>
      </div>
      </div>):<></>}
         <div className="ViewButton">
          <MajorButton
          label={(props.apiKeys.isGenaratingKeys)?<Spinner/>:
            (user.userdata.publicKey !=="" && user.userdata.privateKey !=="")
          ?"Re-Generate keys":"Generate keys"}
          onClick={()=>{props.genarateApiKeys(user.userdata.id)}}
          />
         </div>
         <div className="errorPoint">
         {props.apiKeys.message && props.apiKeys.message}
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
    apiKeys: state.apiKeys
  }
}
const mapDispatchToProps = {
  genarateApiKeys,
  clearUserState,
  clearKeysState
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiDashBoard)