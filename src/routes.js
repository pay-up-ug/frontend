import React,{Fragment} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet ,
    Navigate,
} from "react-router-dom";
import store from "./redux/store";
import App from "./components/App";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
import ApiDashBoard from "./components/ApiDashboard"
import ApiDocumentation from "./components/ApiDocumentation";
import LinksDashboard from "./components/LinksDashboard";
import CreateLink from "./components/CreateLink";
import AddToLink from "./components/AddToLink";
import Settlelink from"./components/SettleLink";
import NotFound from "./components/NotFound";
// Protected route should have token. If not, login.
const ProtectedRoute = ({ isAllowed}) =>
  isAllowed ?  <Outlet /> : <Navigate to="/login" />;

const hasToken = store.getState().user?.token;

const Routing = () => (
  <Router>
    <Fragment> 
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route exact path='/' element={<ProtectedRoute
      isAllowed={hasToken}/>}>
            
      <Route
       path="/dashboard" element={<Dashboard/>}
      />
      <Route
        path="/apidashboard" element={<ApiDashBoard/>}
      />
      <Route
        path="/linksDashboard" element={<LinksDashboard/>} 
      />
      <Route
        path="/createlink" element={<CreateLink/>} 
      />
      <Route
        path="/apidocs" element={<ApiDocumentation/>}  
      />
      <Route
        path="/addtolink" element={<AddToLink/>}
      />
      <Route
        path="/link" element={<Settlelink/>} 
      />
        </Route>
     
      <Route path="*" element={<NotFound/>} />
      </Routes>
      </Fragment>
  </Router>
);

export default Routing;
