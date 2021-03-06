import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <App store={store}/>
      </Provider>
    </HashRouter>, document.getElementById('root')
  );
}

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

rerenderEntireTree(store.state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
