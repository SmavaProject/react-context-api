import React from 'react';
import { Provider} from "./components/Context";
import ReactDOM from 'react-dom';

import App from './components/App';
import './index.css';

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>,
  document.getElementById('root')
);
