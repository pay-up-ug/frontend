import React from "react"
import "./ApiDocumentation.css"
import Header from "../Header";
import Footer from "../Footer";
import MajorButton from "../MajorButton";
import keys from "../../assets/images/keys.png"
import Mobilbody from "../../assets/images/mobilebody.png"
import responsemomo from "../../assets/images/responsemomo.png"
import momotrackbody from "../../assets/images/momotrackbody.png"
import trackmpayment from "../../assets/images/trackmpayment.png"
import cardbody from "../../assets/images/cardbody.png"
import cardResponse from "../../assets/images/cardResponse.png"
import cardtrackbody from "../../assets/images/cardtrackbody.png"
import cardtrackresp from "../../assets/images/cardtrackresp.png"


function ApiDashBoardDocs(props) {
  return (
    <div className="App">
      {/* <div>user: {props.user.userFetching}</div>
      <button onClick={() => props.fetchUser()}>User</button> */}
     <Header/>
     <div className="Tittle2">
       <div className="HeadTittle3" >API Docs</div>
       <div className="BalanceSection">
       <MajorButton
          label="Get Started"
        />
        </div>
      </div>
      <ol  className="DocsHeader">
        <a href="#intro" className="DocsHeaderItem">
           Introduction 
        </a>
        <a href="#import" className="DocsHeaderItem">
          Key importance 
        </a>
        <a href="#usage"className="DocsHeaderItem">
        Examples of keys usage 
        </a>
        <a href="#test"className="DocsHeaderItem">
        Testing & errors 
        </a>

      </ol>
     <div className="HolderBodyDocs">
      <div className="LeftLander">
      <div id="intro" className="HeadTittle3">
        Introduction
      </div>
        <div className="Fronttext5">
       This is the documentations for an open API for gateway. 
       Here at pay-up we offer you a simple to intergrate Api to 
       add to your appilication and  collect payments from your client.
       Out main forcus was to offer Ugandan means of payment with easy to support Ugandan
       Start-ups at very low costs. We currently offer payments using mobile money and card.
       We offer you a testing playground as you test how our system can be intergrated with your
       system.you can go live when you fell ready to. Be ware, that when you go live, your dealing
       with real money between you and your clients. 
       We maintain a wallet for all your Api tansactions balance and you can chose to withdraw this
       money to your bank account or mobile money when you wish.
       Lets take you through how easy it is to use this API. For any help please consult the docs 
       or reach out to us, Afterall, we in your back yard. 
        </div>
      
       
       </div>  
       <div className="LeftLander">
      <div id="import" className="HeadTittle3">
      Key importance
      </div>
        <div className="Fronttext5">
       Once you generate keys on our platform, you will get a private key and
       a public key, copy these values and add them as secrets to your code base.
       These keys signify your identitity outside pay up and you should securely keep 
       them to your self.
       <img id="image" src={keys}
        className="imageClass"
            alt="keys screenshot" />
       The public key can be added to your client app to initaite transactions 
       that are directly linked with your pay up account.
       The Private key is only to be seen in house, this key is better kept on the
       server side to prevent it from ever being viewed out side.
       It has for access than the public key and can be used to check on the status 
       of a transaction given it's id.
       Do not commit any or these keys to online code repositories otherwise payup will 
       not be responsible for what could happen.
         </div>
         <div id="usage" className="HeadTittle3">
       Examples of keys usage
      </div>
        <div className="Fronttext5">
          <h3>For mobile clients</h3>
         <div className="link"> https://pay-upbackend.herokuapp.com/api/playground/v1/mobilepay/"public_key"</div><br/>
          <br/>
          The the mobile payments Api can be accessed from the links above.
          attach your public key where your see "Public_key".  
          This is a post request and the raw format of it's body is;<br/>
          <img id="image" src={Mobilbody}
        className=""
            alt="keys screenshot" /><br/>
            On making a successfull transaction, you should recieve something of the like.
            <img id="image" src={responsemomo}
        className="imageClass"
            alt="keys screenshot" /><br/>
            For the case of monitoring the transaction. You can send a get request to:<br/>
            <div className="link">
               https://pay-upbackend.herokuapp.com/api/playground/v1/mobilepay/track/"private_key"</div><br/>
              This should be done on the server side and it's body is the
              internal transction id. <br/>
              <img id="image" src={momotrackbody}
        className=""
            alt="keys screenshot" /><br/>
            The response should be:<br/>
            <img id="image" src={trackmpayment}
        className="imageClass"
            alt="keys screenshot" /><br/>
           if the transaction to start with is a success, Your wallet will be credited and for a user
           in production, they can easily with draw their moneyto mobile or bank.

          <h3>For Card clients</h3>
          <div className="link"> 
          https://pay-upbackend.herokuapp.com/api/playground/v1/cardpayment/"public_key"</div><br/>
          <br/>
         
          The the card payments Api can be accessed from the links above.
          attach your public key where your see "ublic_key". Ps, only supports mastercard and visa will 
          work, mastercard  starts with a 5 and visa with a 4
          This is a post request and the raw format of it's body is;<br/>
          <img id="image" src={cardbody}
        className=""
            alt="keys screenshot" /><br/>
            On making a successfull transaction, you should recieve something of the like:
            <img id="image" src={cardResponse}
        className="imageClass"
            alt="keys screenshot" /><br/>
            For the case of monitoring the transaction. You can send a get request to:<br/>
            <div className="link">
               https://pay-upbackend.herokuapp.com/api/playground/v1/cardpayment/track/"private_key"</div><br/>
              This should be done on the server side and it's body is the
              internal transction id. <br/>
              <img id="image" src={cardtrackbody}
        className=""
            alt="keys screenshot" /><br/>
            The response should be:<br/>
            <img id="image" src={cardtrackresp}
        className="imageClass"
            alt="keys screenshot" /><br/>
         </div>
         {/* <div className="HeadTittle3">
       Checkout Implementation
      </div>
        <div className="Fronttext5">
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book. It has 
          survived not only five centuries, but also the leap
           into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the
             release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing
               software like Aldus PageMaker including versions of
                Lorem Ipsum.
         </div> */}
         <div id="test" className="HeadTittle3">
        Testing & errors
      </div>
        <div className="Fronttext5">
        This is to document the testing values for this API.<br/>
        <h3>For Mobile testing</h3>
        Any phone number used on the testing environment will turn out successfull.<br/>
        <h4>For failed transactions</h4>
        46733123450<br/>
        <h4>For rejected transactions</h4>
        46733123451<br/>
        <h4>For pending transactions (30 seconds)</h4>
        46733123453<br/>
        <h4>For pending transactions</h4>
        46733123454<br/>
        <h3>For Card testing</h3>
        Only the Listed cards will be accepted by the demo of the app

        <ol>
          Successfull mastercard
          <li>
          5444222211114444-cvv-432-date-02/24
          </li>
          <li>
          5443333333333333-cvv-324-date-04/24
          </li>
        </ol>
        <ol>
          Pending mastercard
          <li>
          5444101010101010-cvv-987-date-08/24
          </li>
        </ol>
        <ol>
          Successfull visa
          <li>
          4444222211114444-cvv-432-date-11/24
          </li>
          <li>
          4443333333333333-cvv-324-date-09/24
          </li>
        </ol>
        <ol>
          Pending mastercard
          <li>
          4444101010101010-cvv-987-date-12/24
          </li>
        </ol>

        <h3>Errors</h3>
        Any wrong body sent will return bad request with a code 400.<br/>
        If the api key is not right then the message returned will be unauthorised with 
        the code 403.
        <br/>
        <br/>
         </div>

       
       </div>     
     </div>
     <Footer/>
    </div>
  )
}



export default ApiDashBoardDocs