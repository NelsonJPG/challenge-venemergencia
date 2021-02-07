import axios from 'axios'

export const GET_USERS = 'GET_USERS'
export const USERS_ERROR = 'USERS_ERROR'

export const getUsers = () => async dispatch => {
    
    try{
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: GET_USERS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: USERS_ERROR,
            payload: error,
        })
    }

}