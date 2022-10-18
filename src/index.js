import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux';
import App from './App';
import { rootReducer } from './redux/rootReducer';
import reportWebVitals from './reportWebVitals';


const store = createStore(rootReducer,compose(
  applyMiddleware(
    thunk
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
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
