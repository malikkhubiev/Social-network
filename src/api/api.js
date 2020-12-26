import * as axios from 'axios';
import authData from './../redux/authDATA';

export const usersAPI = {
    async getUsers(currentPage = 1, pageSize = 10) {
        let response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        });
        return response.data;
    },
    async getUser(userId) {
        let response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`);
        return response.data;
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
        if (counter === authData.length) {
            callBack('Wrong Email or Password');
        }
    }
}