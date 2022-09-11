import axios from "axios";
import { API_BASE_URL } from "../../config";
import {
    FETCHING_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILED,
    CLEAR_USER_STORE,
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
export const clearUserState = () => {
    return {
        type: CLEAR_USER_STORE,
    };
};


const Login = (userData) => async (dispatch) => {
    dispatch(loginfetching());
        axios({
            url: API_BASE_URL+"/users/login",
            method: "POST",
            data: userData,
          })
            .then((res) => {     
                const user= {
                    publicKey:res.data.publicKey,
                    privateKey:res.data.privateKey,
                    prodPublicKey:res.data.prodPublicKey,
                    prodPrivateKey:res.data.prodPrivateKey,
                    environment:res.data.environment,
                    balance:res.data.balance,
                    testBalance:res.data.testBalance,
                    token:res.data.token,
                    id:res.data._id,
                    name:res.data.name,
                    email:res.data.email,
                    contact:res.data.contact,
                    since:res.data.createdAt,
                }
                localStorage.setItem("token", user.token);
               
                return dispatch(loginSuccess(user));
            })
            .catch((err) => { 
                dispatch(loginFailed("failed: "+err.response.data.messege ));
                //console.log(err.response.data.messege)
            });
     }
export const Register = (userNew) => async (dispatch) => {
        dispatch(loginfetching());
        axios({
            url: API_BASE_URL+"/users/Createuser",
            method: "POST",
            data: userNew,
          })
            .then((res) => {   
                const user= {
                    publicKey:res.data.publicKey,
                    privateKey:res.data.privateKey,
                    prodPublicKey:res.data.prodPublicKey,
                    prodPrivateKey:res.data.prodPrivateKey,
                    environment:res.data.environment,
                    balance:res.data.balance,
                    testBalance:res.data.testBalance,
                    token:res.data.token,
                    id:res.data._id,
                    name:res.data.name,
                    email:res.data.email,
                    contact:res.data.contact,
                    since:res.data.createdAt,
                }
                localStorage.setItem("token", user.token);
                return dispatch(loginSuccess(user));
            })
            .catch((err) => { 
                dispatch(loginFailed("failed: "+err.response.data.messege ));
            });
     
 }

  export default Login;