import React from "react"
import "./Header.css"
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { connect } from "react-redux"
import { Link, useLocation  } from "react-router-dom";
import {
  clearUserState
} from "../../redux/user/user.actions"

function Header(props) {
  const { user } = props;
  const location = useLocation();
  const logout = () => {
    localStorage.clear();
    props.clearUserState();
    window.location.href = "/";
  };

  const hasToken = user.userdata?.token

  return (
    <div className="Header">
        <div className="Logo"><Logo/></div>
        <div className="MenuHead">
            <Link 
            to="/dashboard"
            className="Menuitem">
            API docs
            </Link>
            <Link 
            to="/apidashboard"
            className="Menuitem">
            API dashboard
            </Link>
            <Link 
            to="/linksDashboard"
            className="Menuitem">
            Payment Links
            </Link>
             {(!hasToken || user.userdata?.token === "" ) ?
              <>{location.pathname === "/register" ?
              (<Link
                to="/login"
               className="Menuitem">
               Login
               </Link>):
               (<Link
                to="/register"
                className="Menuitem">
               Sign up
               </Link>)
              }</>
               : (<div 
                onClick={logout}
               className="Menuitem">
              Logout
               </div>)
             }
        </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state.user,
  }
}
const mapDispatchToProps = {
  clearUserState
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)