import React, { useState } from 'react';
import style from './Login.module.css';
import {reduxForm, Field} from 'redux-form';
import { CheckBox, Input } from '../common/FormsControlls/FormsControlls';
import { required } from '../../utils/validators';
import { LoginSanka } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIsAuth } from '../common/Selectors/auth-selectors';
import Cookies from 'js-cookie';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login' name={'login'} validate={[required]} component={Input} />
            </div>
            <div>
                <Field placeholder='Password' name={'password'} validate={[required]} component={Input} />
            </div>

            {props.authMode === 'login'?
            <div>
                <Field placeholder='' name={'rememberMe'} validate={[]} component={CheckBox} />
            </div>:''}
            
            <div>
                <button>Enter</button>
            </div>
            <div className={style.summaryError}>
                {props.error?<p>{props.error}</p>:''}
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm); 

const Login = (props) => {

    let [authMode, setAuthMode] = useState('login'); 
    let changeAuthMode = res => setAuthMode(res);

    let mySubmit = (formData) => {
        props.LoginSanka(formData, authMode);
    }

    // Auto Autent
    // if(Cookies.get('authorized') === 'true'){
    //     let login = Cookies.get('login');
    //     let password = Cookies.get('password');
    //     let rememberMe = true;
    //     mySubmit({login, password, rememberMe});
    // }

    if(props.isAuth){
        return <Redirect to='/profile' />
    }

    return (
        <div className={style.sectionLogin}>
            <p>{authMode}</p>
            <div><button onClick={()=>changeAuthMode('login')}>Log in</button> / <button onClick={()=>changeAuthMode('register')}>Register now</button></div>
            <LoginReduxForm authMode={authMode} onSubmit={mySubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
})

const LoginContainer = connect(mapStateToProps, {LoginSanka})(Login);

export default LoginContainer;