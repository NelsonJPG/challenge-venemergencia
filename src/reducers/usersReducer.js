import {GET_USERS, USERS_ERROR} from '../actions/usersActions'

const initialState = {
    users:[]
}

const usersReducer = (state = initialState, action) =>{

    switch(action.type){

        case GET_USERS:
        return {
            ...state,
            users:action.payload
        }
        case USERS_ERROR:
            return{
                error: action.payload 
            }
        default: return state
    }

}

export default usersReducer;