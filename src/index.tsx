import React from 'react';
import ReactDOM from 'react-dom';
import './media/styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Router } from 'react-router-dom';
import routes from './routes';

const component = (
    <BrowserRouter>
        {routes}
    </BrowserRouter>
);

ReactDOM.render(component, document.getElementById('root'));
registerServiceWorker();
