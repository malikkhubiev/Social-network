import React from 'react';
import style from './Login.module.css';
import {reduxForm, Field} from 'redux-form';
import { Input } from '../common/FormsControlls/FormsControlls';
import { required } from '../../utils/validators';
import { LoginSanka } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth-selectors';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Login' name={'login'} validate={[required]} component={Input} />
            </div>
            <div>
                <Field placeholder='Password' name={'password'} validate={[required]} component={Input} />
            </div>
            <div>
                <Field type='checkbox' name={'rememberMe'} className={style.rem} component={'input'} /> remember me
                </div>
            <div>
                <button>Log in</button>
            </div>
            <div className={style.summaryError}>
                {props.error?<p>{props.error}</p>:''}
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm); 

const Login = (props) => {
    let mySubmit = (formData) => {
        props.LoginSanka(formData);
    }
    if(props.isAuth){
        return <Redirect to='/profile' />
    }
    return (
        <div className={style.sectionLogin}>
            <p>Login</p>
            <p>Hint: login and password - admin</p>
            <LoginReduxForm onSubmit={mySubmit} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
})

const LoginContainer = connect(mapStateToProps, {LoginSanka})(Login);

export default LoginContainer;