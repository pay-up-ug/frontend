import { FETCHING_USER, FETCH_USER_SUCCESS,FETCH_USER_FAILED,CLEAR_USER_STORE } from '../types';


    const INITIAL_STATE = {
        userdata: {},
        userFetching:false,
        userFetched:false,
        userFailed:false,       
        error:""
    };

    const userReducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case FETCHING_USER:
               
               return {
                 ...state,
                  userFetching:true,
                  userFetched:false,
                  userFailed:false,
                  error:""
               };
            case FETCH_USER_SUCCESS:
               return {
                  ...state, 
                  userFetching:false,
                  userFetched:true,
                  userFailed:false,
                  userdata:action.payload
               };
            case FETCH_USER_FAILED:
               return {
                  ...state,  
                  userFetching:false,
                  userFetched:false,
                  userFailed:true,
                  userdata:{},
                  error:action.payload
               };
            case CLEAR_USER_STORE:
               return {
                  ...state,  
                  userFetching:false,
                  userFetched:false,
                  userFailed:false,
                  userdata:{},
                  error:""
               };
             default: return state;

        }

    };

    export default userReducer;