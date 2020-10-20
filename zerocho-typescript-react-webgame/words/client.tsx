import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import WordRelay from './WordRelayClass';

const Hot = hot(WordRelay);

ReactDOM.render(<Hot />, document.querySelector('#root'));