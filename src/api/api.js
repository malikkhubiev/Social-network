import * as axios from 'axios';

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => { 
                return response.data
            });
    },
    getUser(userId){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
            return response.data;    
        });
    }
}