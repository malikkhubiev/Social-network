import authData from './../redux/authDATA';
import usersData from './../redux/usersDATA';

export const usersAPI = {
    getUsers() {
        return usersData.slice(0);
    },
    follow(followedUserId){
        usersData.map(user=>user.id === followedUserId?user.followed = true:0);
        return usersData.slice(0);
    },
    unFollow(followedUserId){
        usersData.map(user=>user.id === followedUserId?user.followed = false:0);
        return usersData.slice(0);
    },
    getUser(userId) {
        let profile;
        usersData.map(user=>{
            if (user.id === +userId) profile = user;
        });
        return profile;
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