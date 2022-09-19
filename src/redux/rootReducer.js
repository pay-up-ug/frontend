import { combineReducers } from 'redux';


import userReducer from './user/user.reducer';
import apiKeysReducer from './OpenApiKeys/openapi.reducer'


const appReducer = combineReducers({
    user: userReducer,
    apiKeys:apiKeysReducer
});
const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        console.log("log")
        return appReducer(undefined, action)
      }
    return appReducer(state, action)
  }

export default rootReducer;