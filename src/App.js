import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Redirect, Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path='/' render={() => <Redirect to='/profile' />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/profile/:userId?' render={() => <div className='rightSide'><ProfileContainer /></div>} />
          <Route path='/dialogs/:userId?' render={withSuspense(DialogsContainer)} />
          <Route path='/users' render={withSuspense(UsersContainer)} />
          <Route path='*' render={() => <div className='rightSide'>404 Not found</div>} />
        </Switch>
      </div>
    </div>
  );
}
export default App;