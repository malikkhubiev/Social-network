import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className="appWrapper">
      <HeaderContainer/>
      <div className="double">
        <NavBar friends={props.store.getState().navbarPage.friends} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </div>
  );
}
export default App;
