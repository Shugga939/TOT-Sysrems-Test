import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FoldersStore from './store/FoldersStore';
import LettersStore from './store/LettersStore';

interface IStore {
  folders : FoldersStore
  letters: LettersStore
}

export const Context = createContext({}as IStore)

const root = ReactDOM.createRoot (document.getElementById('root') as HTMLElement);
root.render(
<Context.Provider value={{
    folders: new FoldersStore(),
    letters: new LettersStore()
  }}>
    <App />
  </Context.Provider>,
);

