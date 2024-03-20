import {profileAPI, usersAPI} from "../api/api";
import {setFetching, setFollowingProgress, setTotalUsersCount, setUsers} from "./users-reducer";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE";

let initialState = {
    postData: [
        {id: 1, message: 'hi, tim', likesCount: 0},
        {id: 2, message: 'hi, aleks', likesCount: 2},
    ],
    profile: null,
    status: ""
}
const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, newPost]
            }

        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS_PROFILE: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state
    }
}

export let addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText
    }
}

export let setUserProfile = (profile) => {

    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export let setStatus = (status) => {

    return {
        type: SET_STATUS_PROFILE,
        status
    }
}


export const getProfile = (userId) => {
    return (dispatch) => {

        profileAPI.getProfile(userId).then(data=>{
            dispatch(setUserProfile(data))
        })

    }
}
export const getStatus = (userId) => {
    return (dispatch) => {

        profileAPI.getStatus(userId).then(response=>
        {
            dispatch(setStatus(response.data))
        })

    }
}
export const updateStatus = (status) => {
    return (dispatch) => {

        profileAPI.updateStatus(status).then(response=>
        {
            if (response.data.resultCode ===0)
            {
                dispatch(setStatus(status))
            }

        })

    }
}


export default profileReducer