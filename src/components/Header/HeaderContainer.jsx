import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LogoutSanka } from '../../redux/auth-reducer';
import { getUsers } from '../../redux/users-reducer';
import { getIsAuth, getUserName } from '../common/Selectors/auth-selectors';
import Header from './Header';

const HeaderContainer = (props) => {
    let getUsers = props.getUsers;
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    name: getUserName(state),
});

export default connect(mapStateToProps, { getUsers, LogoutSanka })(HeaderContainer);