import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import app from './ResponseCheckClass';

const Hot = hot(app);

ReactDOM.render(<Hot />, document.querySelector('#root'));