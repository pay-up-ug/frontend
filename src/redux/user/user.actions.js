import axios from "axios";
import { API_BASE_URL } from "../../config";
import {
    FETCHING_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
  } from "./../types";

 const loginSuccess = (data) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload:data
    };
};
const loginFailed = (err) => {
    return {
        type: FETCH_USER_FAILED,
        payload:err
    };
};
const loginfetching = () => {
    return {
        type: FETCHING_USER,
    };
};

const Login = (userData) => async (dispatch) => {
    dispatch(loginfetching());
        axios({
            url: API_BASE_URL+"/users/login",
            method: "POST",
            headers: {
              authorization: "your token comes here",
            },
            data: userData,
          })
            .then((res) => { 
                const user= {
                    publicKey:res.publicKey,
                    privateKey:res.privateKey,
                    prodPublicKey:res.prodPublicKey,
                    prodPrivateKey:res.prodPrivateKey,
                    environment:res.environment,
                    balance:res.balance,
                    testBalance:res.testBalance,
                    token:res.token,
                    id:res._id,
                    name:res.name,
                    email:res.email,
                    contact:res.contact,
                    since:res.createdAt,
                }
                localStorage.setItem("token", user.token);
                return dispatch(loginSuccess(user));
            })
            .catch((err) => { 
                dispatch(loginFailed("failed"));
                console.log(err)
            });
        }

  export default Login;