import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_TOTAL_COUNT = "SET-TOTAL-COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS"

let initialState = {
    users: [],
    newPostText: '',
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state
                , users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }

                    return u
                })

            }

        }

        case UNFOLLOW: {
            return {
                ...state
                , users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }

                    return u
                })

            }

        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state
    }
}

export let acceptFollow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}
export let acceptUnfollow = (userId) => {

    return {
        type: UNFOLLOW,
        userId: userId
    }
}
export let setUsers = (users) => {

    return {
        type: SET_USERS,
        users
    }
}
export let setCurrentPage = (currentPage) => {

    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export let setTotalUsersCount = (totalUsersCount) => {

    return {
        type: SET_TOTAL_COUNT,
        totalUsersCount
    }
}
export let setFetching = (isFetching) => {

    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export let setFollowingProgress = (isFetching, userId) => {

    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching, userId
    }
}
export const getUsers = (currentPage,pageSize) => {
    return (dispatch) => {

        dispatch(setFollowingProgress(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })

    }
}

export const follow = (userId) => {
    return (dispatch) => {

        dispatch(setFollowingProgress(true,userId))

        usersAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptFollow(userId))
            }
            dispatch(setFollowingProgress(false,userId))
        })

    }
}

export const unfollow = (userId) => {
    return (dispatch) => {

        dispatch(setFollowingProgress(true,userId))

        usersAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(acceptUnfollow(userId))
            }
            dispatch(setFollowingProgress(false,userId))
        })

    }
}


export default usersReducer