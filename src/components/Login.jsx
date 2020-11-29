import React from 'react';
import style from './Login.module.css';

const LoginForm = (props) => {
    return (
        <form>
            <div>
                <input placeholder='Login' />
            </div>
            <div>
                <input placeholder='Password' />
            </div>
            <div>
                <input type='checkbox' /> remember me
                </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}
const Login = (props) => {
    return (
        <div className={style.sectionLogin}>
            <p>Login</p>
            <LoginForm />
        </div>
    )
}

export default Login;