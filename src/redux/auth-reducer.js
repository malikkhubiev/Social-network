import { stopSubmit } from 'redux-form';
import { usersAPI } from './../api/api';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const REM_AUTH_USER_DATA = 'REM-AUTH-USER-DATA';

let initialState = {
    name: null,
    login: null,
    password: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        };
        case REM_AUTH_USER_DATA: {
            return {
                ...state,
                isAuth: false,
            }
        };
        default: {
            return state;
        };
    }
}

export const setAuthUserData = (login, password, name) => {
    return ({
        type: SET_AUTH_USER_DATA,
        data: { login, password, name } 
    })
};
export const remAuthUserData = () => {
    return ({
        type: REM_AUTH_USER_DATA
    })
};

export const LoginSanka = (formData, authMode) => async (dispatch) => {
    if(authMode === 'login'){
        let result; let name;
        function logInCallBack(prom, userName) {
            result = prom;
            name = userName;
        }
        await usersAPI.logIn(formData, logInCallBack);
        if (result === true) {
            dispatch(setAuthUserData(formData.login, formData.password, name));
        } else {
            dispatch(stopSubmit('login', { _error: result }));
        }
    }else{
        let result;
        function registerCallBack(prom){
            result = prom;
        }
        await usersAPI.register(formData, registerCallBack);
        if(result === true){
            alert('Вы успешно зарегистрированы')
        }else{
            dispatch(stopSubmit('login', { _error: result }))
        }
    }
}

export const LogoutSanka = () => (dispatch) => {
    dispatch(remAuthUserData());
}

export default authReducer;