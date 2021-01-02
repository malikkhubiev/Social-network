import authData from '../DATA/authDATA';
import usersData from '../DATA/usersDATA';
import users, { mainUser } from '../DATA/usersDATA';

export const usersAPI = {
    addPost(postMessage) {
        let message = postMessage;
        let id = mainUser.posts.length;
        mainUser.posts = [...mainUser.posts, { id, message, likes: 100 }];
        return mainUser;
    },
    changeStatus(status) {
        mainUser.status = status;
        return mainUser;
    },
    getUser(userId) {
        let profile;
        usersData.map(user => {
            if (user.id === +userId) profile = user;
        });
        return profile;
    },
    getMainUser() {
        return mainUser;
    },
    getUsers() {
        return usersData;
    },
    follow(followedUserId) {
        usersData.map(user => user.id === followedUserId ? user.followed = true : 0);
        return usersData;
    },
    unFollow(followedUserId) {
        usersData.map(user => user.id === followedUserId ? user.followed = false : 0);
        return usersData;
    },
    sendMessage(id, sendedMessage) {
        let searchedUser;
        usersData.map(user=>{
            if(user.id === id){
                user.messages.push({ id: user.messages.length, message: sendedMessage});
                searchedUser = user;
            }
        });
        return searchedUser;
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