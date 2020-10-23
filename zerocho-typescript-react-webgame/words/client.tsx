import * as React from './node_modules/@types/react';
import * as ReactDOM from './node_modules/@types/react-dom';
import { hot } from './node_modules/react-hot-loader/root';

import WordRelay from './WordRelayClass';

const Hot = hot(WordRelay);

ReactDOM.render(<Hot />, document.querySelector('#root'));