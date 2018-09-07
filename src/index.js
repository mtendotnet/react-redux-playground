/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './base.style';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();