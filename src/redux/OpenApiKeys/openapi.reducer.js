import {
    GENERATING_APIKEYS_SUCCESS,
    GENERATING_APIKEYS_FAIL,
    START_GENERATING_APIKEYS,
    CLEAR_KEYS_STORE
  } from "./../types";
  
  const initialState = {
    isGenaratingKeys: false,
    isGenerated: false,
    FailedToGenerated: false,
    keys:{},
    message: "",
  };
  
  const apiKeysReducer = (state = initialState, action) => {
    switch (action.type) {
      case GENERATING_APIKEYS_SUCCESS:
        return {
          ...state,
          isGenaratingKeys: false,
          isGenerated: true,
          FailedToGenerated: false,
          keys:action.payload,
          message: "keys generated successfully",
        };
  
      case START_GENERATING_APIKEYS:
        return {
          ...state,
          isGenaratingKeys: true,
          isGenerated: false,
          FailedToGenerated: false,
        };
  
      case GENERATING_APIKEYS_FAIL:
        return {
          ...state,
          message: "failed to get keys",
          isGenaratingKeys: false,
          isGenerated: false,
          FailedToGenerated: true,
        };
      case CLEAR_KEYS_STORE:
          return {
            ...state,
            message: "",
            isGenaratingKeys: false,
            isGenerated: false,
            FailedToGenerated: false,
            keys:{}
          };
  
      default:
        return state;
    }
  };
  export default apiKeysReducer;
  