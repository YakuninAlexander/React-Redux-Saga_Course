import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { compose, createStore, applyMiddleware } from 'redux';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import reportWebVitals from './reportWebVitals';
import { forbiddenWordsMiddleware } from './redux/middleware';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()

const store = createStore(rootReducer,compose(
  applyMiddleware(
    thunk, forbiddenWordsMiddleware, saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher);

const root = ReactDOM.createRoot(document.getElementById('root'));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

root.render(
  app
);

reportWebVitals();
