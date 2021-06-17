import authData from '../DATA/authDATA';
import usersData from '../DATA/usersDATA';
import { mainUser } from '../DATA/usersDATA';
import Cookies from 'js-cookie';
const bcrypt = require('bcryptjs');

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
        usersData.map(user => {
            if (user.id === id) {
                user.messages.push({ id: user.messages.length, message: sendedMessage });
                searchedUser = user;
            }
        });
        return searchedUser;
    },
    async logIn(loginData, logInCallBack) {
        let counter = 0;
        authData.map(obj => {
            if (obj.login === loginData.login && bcrypt.compareSync(loginData.password, obj.password)) {
                logInCallBack(true, obj.login);
                if(loginData.rememberMe === true){
                    Cookies.set('authorized', true);
                    Cookies.set('login', obj.login);
                    Cookies.set('password', obj.password);
                }
            } else {
                counter++;
            }
        });
        if (counter === authData.length) {
            logInCallBack('Wrong Email or Password');
        }
    },
    async register(registerData, registerCallBack) {
        let counter = 0;
        authData.map(obj => {
            if (obj.login === registerData.login) {
                registerCallBack('A user with the same login already exists');
            } else {
                counter++;
            }
        });
        if (counter === authData.length) {
            let hashedPassword = await bcrypt.hash(registerData.password, 1);
            authData.push({
                login: registerData.login,
                password: hashedPassword,
            });
            registerCallBack(true);  
        }
    }
}