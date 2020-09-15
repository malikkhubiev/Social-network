import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
const App = (props) => {
  let friends = props.state.navbarPage.friends;
  let posts = props.state.profilePage.posts;
  let newPostText = props.state.profilePage.newPostText;
  let newMessageText = props.state.dialogsPage.newMessageText;
  let dialogs = props.state.dialogsPage.dialogs;
  let messages = props.state.dialogsPage.messages;
  let dispatch = props.dispatch;
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <div className="double">
          <NavBar friends={friends}/>
          <Route path='/dialogs' render={() => <Dialogs newMessageText = {newMessageText} dialogs={dialogs} dispatch={dispatch} messages={messages} />} />
          <Route path='/profile' render={() => <Profile newPostText = {newPostText} dispatch={dispatch} posts={posts} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
