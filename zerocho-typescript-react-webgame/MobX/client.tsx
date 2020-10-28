import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import { StoreProvider } from './Context'
import { userStore, postStore } from './store';
import App from './App';

const Hot = hot(App);

ReactDOM.render(
  <StoreProvider>
    <Hot />
  </StoreProvider>
  , document.querySelector('#root')
)
