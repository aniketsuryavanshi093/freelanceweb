import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Buffer } from 'buffer';
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import UserStepState from './Context/CreateUsersteps/UserStepState';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';

const customStyles = {
  toast: {
    backgroundColor: '#D8FFE6',
    fontSize: '28px',
    fontWeight: 600,
    color: '#000713'
  }
};
let peristor = persistStore(store);
// it just overrides the buffer from window or if buffer is not in window it adds the buffer
window.Buffer = window.Buffer || Buffer;
store.subscribe(() => {});
ReactDOM.render(
  <Provider store={store}>
    <UserStepState>
      <PersistGate persistor={peristor}>
        <App />
      </PersistGate>
    </UserStepState>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      style={customStyles}
    />
  </Provider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
