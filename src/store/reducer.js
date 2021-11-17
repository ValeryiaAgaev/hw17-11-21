import {
    ALL_USERS,
    CHANGE_POST,
    CHANGE_USER,
    CHANGE_IS_LOADING,
    COMMENTS,
    FETCH_POSTS
} from "./actions";

const initialState = {
    users: [],
    activeUser: null,

}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case ALL_USERS:
            return {...state, users: payload}

        case CHANGE_USER:
            return {...state, activeUser: payload}

        case FETCH_POSTS:
            return {...state, posts: payload}

        case CHANGE_IS_LOADING:
            return {...state, postsIsLoading: payload}

        case CHANGE_POST:
            return {...state, activePost: payload}

        case COMMENTS:
            return {...state, comments: payload}

        default:
            return state
    }
}