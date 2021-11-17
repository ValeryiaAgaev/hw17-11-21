import {
    CHANGE_USER,
    ALL_USERS
} from "./actions";

export const getUsers = () => {
    return async (dispatch) => {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            dispatch( addUsers(data) )
        } catch (e) {
            console.log( e.message )
        }

    }
}

export const changeUser = (user) => {
    return {
        type: CHANGE_USER,
        payload: user
    }
}

const addUsers = data => {
    return {
        type: ALL_USERS,
        payload: data
    }
}