import axios from "axios";


const instanse = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "3456d502-8343-4f74-a843-a4aaacfdeb55"
    }
})



export const usersAPI = {
    getUsers (currentPage=1,pageSize=10) {
        return instanse.get(`users/?page=${currentPage}&count=${pageSize}`).then(response=> response.data)
    },
    follow(userId){
       return  instanse.post(`follow/${userId}`).then(response=> response.data)
    },
    unfollow(userId){
        return instanse.delete(`follow/${userId}`).then(response=> response.data)

    }
}

export const profileAPI = {
    getProfile (userId) {
        return instanse.get(`profile/${userId}`).then(response=> response.data)
    },
    getStatus (userId){
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus (status){
        return instanse.put(`profile/status`, {status: status})
    }

}

export const authAPI = {
    me(){
        return instanse.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return instanse.post(`auth/login`,{email, password, rememberMe})
    },
    logout(){
        return instanse.delete(`auth/login`)
    }
}