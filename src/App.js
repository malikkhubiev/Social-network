import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
const App = (props) => {
  let friends = props.appState.navbarPage.friends;
  let posts = props.appState.profilePage.posts;
  let dialogs = props.appState.dialogsPage.dialogs;
  let messages = props.appState.dialogsPage.messages;
  let addPost = props.addPost;
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <div className="double">
          <NavBar friends={friends}/>
          <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages} />} />
          <Route path='/profile' render={() => <Profile addPost = {addPost} posts={posts} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
