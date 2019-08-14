import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import News from './News';
import Routing from './components/MainRoute';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
