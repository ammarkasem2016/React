import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import tStore from './tStore'
import './index.css';
import { Provider } from 'mobx-react';

const Root = (
    <Provider>
        <App/>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));