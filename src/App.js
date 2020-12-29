import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import withSuspense from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

const App = (props) => {
  return (
    <div className="appWrapper">
      <HeaderContainer />
      <div className="double">
        <NavBar friends={props.store.getState().navbarPage.friends} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
        <Route path='/users' render={withSuspense(UsersContainer)}/>
      </div>
    </div>
  );
}
export default App;