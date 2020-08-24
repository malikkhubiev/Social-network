import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
let posts = [
  { id: 1, message: "Hi!", likes: 5 },
  { id: 2, message: "Hey, i'm fine, how are you?", likes: 7 },
  { id: 3, message: "I'm fine too, nice to meet you", likes: 2 },
  { id: 4, message: ";)", likes: 500 },
  { id: 5, message: "React is so much interesting!", likes: 52 },
];

let dialogs = [
  { id: 1, name: 'Artem' },
  { id: 2, name: 'Zabit' },
  { id: 3, name: 'Messi' },
  { id: 4, name: 'Siera' },
  { id: 5, name: 'Zhois' },
];

let messages = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'Good architecture :)' },
  { id: 3, message: 'Have a good day)' },
  { id: 4, message: '#WhatMeansHashTag?' },
  { id: 5, message: 'New Website!!!' },
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
