import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from '../../actions/usersActions'

export const UsersPage = (props) => {
    const dispatch = useDispatch()

    const usersList = useSelector(state => state.users)
    const {error, users} = usersList
    
    useEffect(() => {
        dispatch(getUsers()) 
    }, [dispatch])

    return (
        
        <div className="container p-y ">
            <div className="row">
                {error && error.message?  <h2>{error.message}</h2>
                :
                    <ul className="list-menu">
                        {users && users.map( user => <li key={user.id}>{user.name} <button>delete</button></li>) }   
                    </ul>
                }
            </div>
        </div>
    )
}

export default UsersPage
