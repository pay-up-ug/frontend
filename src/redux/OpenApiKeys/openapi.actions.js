import axios from "../../axios";
import {
  GENERATING_APIKEYS_SUCCESS,
  GENERATING_APIKEYS_FAIL,
  START_GENERATING_APIKEYS,
  CLEAR_KEYS_STORE
} from "./../types";



export const startGeneratingKeys = () => ({
  type: START_GENERATING_APIKEYS,
});

export const GenerateKeySuccess = (response) => ({
  type: GENERATING_APIKEYS_SUCCESS,
  payload: response.data.data,
});

export const GeneratingKeyFail = () => ({
  type: GENERATING_APIKEYS_FAIL
});
export const clearKeysState = () => {
  return {
      type: CLEAR_KEYS_STORE,
  };
};
const genarateApiKeys = (userId) => (dispatch) => {
 dispatch(startGeneratingKeys());
 // console.log("click")
return axios
    .post(`users/generatekeys/${userId}`)
    .then((response) => {
      console.log(response)
      dispatch(GenerateKeySuccess(response))})
    .catch((error) => {
      console.log(error)
      dispatch(GeneratingKeyFail());
    });
};

export default genarateApiKeys;
