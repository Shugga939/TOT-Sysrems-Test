import { AxiosResponse } from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Context } from '.';
import { getFolders } from './http/folderAPI';
import './main.scss'
import InboxPage from './pages/InboxPage';
import LetterPage from './pages/LetterPage';
import { IFolder } from './types/types';
import { DRAFTS_ROUTE, INBOX_ROUTE, SENT_ROUTE, SPAM_ROUTE, TRASH_ROUTE } from './utils/consts';


const loadMailRoutes: IFolder[] = [
  {path:INBOX_ROUTE, name:'Входящие', id:'1'},
  {path:SENT_ROUTE, name:'Отправленные', id:'2'}, 
  {path:DRAFTS_ROUTE, name:'Черновики', id:'3'},
  {path:SPAM_ROUTE, name:'Спам', id:'4'},
  {path:TRASH_ROUTE, name:'Корзина', id:'5'},
  {path:'/mail/sasd', name:'Работа',id:'6'},
  {path:'/mail/loik', name:'Вакансии',id:'7'}, 
]

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
