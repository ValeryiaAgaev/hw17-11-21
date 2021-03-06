import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeUser} from "../../store/actionsCreator";

export default ({user})=> {

    const dispatch = useDispatch()
    const activeUser = useSelector(state => state.activeUser) ?? {}

    const changeUser = () => {
        dispatch(changeUser( user ))
    }

    return (
        <div
            style={{cursor: "pointer"}}
            className={`list-group-item ${user.id===activeUser.id ? 'list-group-item-info': ''}`}
            onClick={changeUser}
        >
            {user.name}
        </div>
    )
}