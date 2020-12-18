import * as axios from 'axios';
import authData from './../redux/authDATA';

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then(response => {
            return response.data
        });
    },
    getUser(userId) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    logIn(loginData, callBack) {
        let counter = 0;
        authData.map(obj => {
            if (obj.login === loginData.login && obj.password === loginData.password) {
                callBack(true, obj.name);
            } else {
                counter++;
            }
        });
        if(counter === authData.length){
            callBack('Wrong Email or Password');
        }
    }
}