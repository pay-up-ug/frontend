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

const hasToken = store.getState().user?.userdata.token;

const Routing = () => (
  <Router>
    <Fragment> 
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route exact path='/dashboard' element={<ProtectedRoute isAllowed={hasToken}/>}>    
      <Route
       path="/dashboard" element={<Dashboard/>}
      />
      </Route>
      <Route exact path='/apidashboard' element={<ProtectedRoute isAllowed={hasToken}/>}>
      <Route
        path="/apidashboard" element={<ApiDashBoard/>}
      />
      </Route>
      <Route exact path='/linksDashboard' element={<ProtectedRoute isAllowed={hasToken}/>}>
      <Route
        path="/linksDashboard" element={<LinksDashboard/>} 
      />
      </Route>
       <Route exact path='/createlink' element={<ProtectedRoute isAllowed={hasToken}/>}>
      <Route
        path="/createlink" element={<CreateLink/>} 
      />
      </Route>
      <Route exact path='/apidocs' element={<ProtectedRoute isAllowed={hasToken}/>}>
      <Route
        path="/apidocs" element={<ApiDocumentation/>}  
      />
      </Route>
      <Route exact path='/addtolink' element={<ProtectedRoute isAllowed={hasToken}/>}>
      <Route
        path="/addtolink" element={<AddToLink/>}
      />
      </Route>
      <Route exact path='/link' element={<ProtectedRoute isAllowed={hasToken}/>}>
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
