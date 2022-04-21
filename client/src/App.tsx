import { AxiosResponse } from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Context } from '.';
import { getFolders } from './http/folderAPI';
import './main.scss'
import InboxPage from './pages/InboxPage';
import LetterPage from './pages/LetterPage';

const App = observer(()=> {
  const {folders} = useContext(Context)
  
  useEffect(()=> {
    (async ()=> {
      const response: AxiosResponse<any> = await getFolders()
      folders.setFolders(response.data)
    })()
    
  },[])

  return (
    <BrowserRouter>
      <Routes>
        {folders.getForlders().map((route)=> {
          return (<Route path={route.path} element={<InboxPage/>} key={route.path}/>)
        })}
        {folders.getForlders().map((route)=> {
          return (<Route path={`${route.path}/:id`} element={<LetterPage/>} key={`${route.path}/:id`}/>)
        })}
        {folders.getForlders().map((route)=> {
          return (<Route path='*' key={route.path} element={<Navigate replace to={route.path} />}/> )
        })}
      </Routes>
    </BrowserRouter>
  );
})

export default App;
