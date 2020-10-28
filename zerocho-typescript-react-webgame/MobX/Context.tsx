import * as React from 'react';
import { createContext } from 'react';

export const storeContext = React.createContext({
  userStore,
  postStore,
});

export const StoreProvider = ({ children }) => {
  return (
    <storeContext.Provider value={{userStore, postStore}}>
      {children}
    </storeContext.Provider>
  )

}