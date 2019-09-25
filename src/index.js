import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from 'src/components/App';
import configureStore from 'src/redux/store';
import { Provider } from 'react-redux';

import 'semantic-ui-css/semantic.min.css';

require('dotenv').config();

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
