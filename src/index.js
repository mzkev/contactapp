import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './Contact.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Contact />, document.getElementById('root'));
registerServiceWorker();
