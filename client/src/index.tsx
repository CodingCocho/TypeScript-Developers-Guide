import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {reducers as appReducer} from './utilities/reducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore(
  {
    reducer: appReducer,
    middleware: [thunk]
  }
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

