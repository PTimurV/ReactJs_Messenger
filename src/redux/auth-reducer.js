import {authAPI, usersAPI} from "../api/api";
import {setFetching, setFollowingProgress, setTotalUsersCount, setUsers} from "./users-reducer";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return state
    }
}

export let setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload:  {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const getAuthUserData = () => {
    return (dispatch) => {

        authAPI.me().then(response => {
            if (response.data.resultCode ===0){
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login,true))
            }

        })

    }
}

export const login = (email,password,rememberMe,) => {

    return (dispatch) => {



        authAPI.login(email,password,rememberMe).then(response => {
            if (response.data.resultCode ===0){
                dispatch(getAuthUserData())
            }
            else{
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })

    }
}

export const logout = () => {
    return (dispatch) => {

        authAPI.logout().then(response => {
            if (response.data.resultCode ===0){
                dispatch(setAuthUserData(null,null,null,false))
            }
        })

    }
}




export default authReducer