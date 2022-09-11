import React from "react"
import "./ApiDocumentation.css"
import Header from "../Header";
import Footer from "../Footer";
import MajorButton from "../MajorButton";
import { connect } from "react-redux"
import {
  fetchUser
} from "../../redux/user/user.actions"

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
          label="Genrate Keys"
        />
    
        </div>
      </div>
     <div className="HolderBodyDocs">
      <div className="LeftLander">
      <div className="HeadTittle3">
        Introduction
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
Lorem Ipsum is simply dummy text of the printing and typesetting
 industry. Lorem Ipsum has been the industry's standard dummy 
 text ever since the 1500s, when an unknown printer took a galley
  of type and scrambled it to make a type specimen book. It has
   survived not only five centuries, but also the leap into
    electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset 
    sheets containing Lorem Ipsum passages, and more recently with
     desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.
        
        </div>
      
       
       </div>  
       <div className="LeftLander">
      <div className="HeadTittle3">
      Key importance
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
         </div>
         <div className="HeadTittle3">
       Examples of keys usage
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
         </div>
         <div className="HeadTittle3">
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
         </div>
         <div className="HeadTittle3">
        Testing errors
      </div>
        <div className="Fronttext5">
        Lorem Ipsum is simply dummy text of the printing 
        and typesetting industry. Lorem Ipsum has been the
         industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and 
          scrambled it to make a type specimen book. 
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

export default connect(mapStateToProps, mapDispatchToProps)(ApiDashBoardDocs)