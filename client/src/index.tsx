import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FoldersStore from './store/FoldersStore';

interface IStore {
  folders : FoldersStore
}

export const Context = createContext({}as IStore)



const root = ReactDOM.createRoot (document.getElementById('root') as HTMLElement);
root.render(
<Context.Provider value={{
    folders: new FoldersStore()
  }}>
    <App />
  </Context.Provider>,
);

