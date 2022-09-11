import { FETCHING_USER, FETCH_USER_SUCCESS,FETCH_USER_FAILED } from '../types';


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
                  userFailed:false
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
                  error:action.payload
               };
             default: return state;

        }

    };

    export default userReducer;