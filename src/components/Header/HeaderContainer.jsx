import React from 'react';
import { connect } from 'react-redux';
import { LogoutSanka } from '../../redux/auth-reducer';
import { getUsers } from '../../redux/users-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount(){
        this.props.getUsers();
    }
    render(){
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    name: state.auth.name,
});

export default connect(mapStateToProps, {getUsers, LogoutSanka})(HeaderContainer);