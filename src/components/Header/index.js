import React from "react"
import "./Header.css"
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { connect } from "react-redux"
// import {
//   fetchUser
// } from "../../redux/user/user.actions"

function Header(props) {
  return (
    <div className="Header">
        <div className="Logo"><Logo/></div>
        <div className="MenuHead">
            <div className="Menuitem">
            API docs
            </div>
            <div className="Menuitem">
            Payment Links
            </div>
            <div className="Menuitem">
            Sign up
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUser: () => dispatch(fetchUser()),
//   }
// }

export default connect(mapStateToProps)(Header)