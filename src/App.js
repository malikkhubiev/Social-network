import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <div className="double">
        <NavBar/>
      </div>
    </div>
  );
}
export default App;
