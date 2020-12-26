import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LogoutSanka } from '../../redux/auth-reducer';
import { getUsers } from '../../redux/users-reducer';
import Header from './Header';

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getUsers();
    }, []);

    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    name: state.auth.name,
});

export default connect(mapStateToProps, { getUsers, LogoutSanka })(HeaderContainer);