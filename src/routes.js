import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
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
const ProtectedRoute = ({ isAllowed, ...props }) =>
  isAllowed ? <Route {...props} /> : <Navigate to="/login" />;

const hasToken = store.getState().user?.accessToken;

const Routing = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/apidashboard" element={<ApiDashBoard/>} />
      <Route path="/linksDashboard" element={<LinksDashboard/>} />
      <Route path="/apidocs" element={<ApiDocumentation/>} />

      <Route path="/createlink" element={<CreateLink/>} />
      <Route path="/addtolink" element={<AddToLink/>} />
      <Route path="/link" element={<Settlelink/>} />
      {/* <Route path="/pricing" component={PricingPage} /> */}
      {/* Inside */}
      {/* <ProtectedRoute
        isAllowed={hasToken}
        exact
        path="/"
        component={AdminDBList}
      /> */}
      <Route path="*" element={<NotFound/>} />
      </Routes>
  </Router>
);

export default Routing;
