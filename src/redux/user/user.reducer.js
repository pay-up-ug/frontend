import { FETCHING_USER, FETCH_USER_SUCCESS,FETCH_USER_FAILED } from '../types';


    const INITIAL_STATE = {
        userdata: {},
        userFetching:false,
        userFetched:false,
        userFailed:false       
    };

    const userReducer = (state = INITIAL_STATE, action) => {

        switch (action.type) {

            case FETCHING_USER:
               // console.log("khali")
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
                  userFailed:false
               };
            case FETCH_USER_FAILED:
               return {
                  ...state,  
                  userFetching:false,
                  userFetched:false,
                  userFailed:true
               };
             default: return state;

        }

    };

    export default userReducer;