import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
const App = (props) => {
  let posts = props.posts;
  let dialogs = props.dialogs;
  let messages = props.messages;
  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header />
        <div className="double">
          <NavBar />
          <Route path='/dialogs' render={() => <Dialogs dialogs={dialogs} messages={messages} />} />
          <Route path='/profile' render={() => <Profile posts={posts} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
