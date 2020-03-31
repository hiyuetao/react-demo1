import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store/reactReduxStore'
import { Provider } from 'react-redux'

// import App from './App';
// import MyFormPage from './pages/MyFormPage';
import ReactReduxPage from './pages/ReactReduxPage';

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    {/* <MyFormPage /> */}
    <ReactReduxPage />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
