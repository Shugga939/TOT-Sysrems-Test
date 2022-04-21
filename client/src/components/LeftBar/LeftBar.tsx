import React, { useContext, useState } from 'react';
import styles from './LeftBar.module.scss'
import {  useLocation } from 'react-router-dom';
import MailLink from '../ui/LinkFolder/LinkFolder';
import EditModal from '../EditModal/EditModal';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { addFolder } from '../../http/folderAPI';
import { AxiosResponse } from 'axios';


const LeftBar = observer(() => {
  const {folders} = useContext(Context)
  const location  = useLocation()
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false)

  const createFolder = (foldersName:string) => {
    if (foldersName !== '')  { 
      (async ()=> {
        const response: AxiosResponse<any> = await addFolder(foldersName)
        folders.setFolder(response.data)
      })()
      setCreateModalOpen(false)
    } 
  }

  const openCreateModal = ()=> {
    setCreateModalOpen(true)
  }

  return (
    <div className={styles.leftBar}>
      <EditModal    
        setShow={setCreateModalOpen} 
        show={createModalOpen} 
        callback={createFolder}
        message={'Создать папку'}
        inputsPlaceholder={''}
      />
      <button className={styles.createFolder} onClick={openCreateModal}>Создать папку</button>
      <div className={styles.linksContainer}>
        {folders.getForlders().map((link, index)=> {
          return <MailLink 
            path={link.path} 
            id={link.id}
            text={link.name}
            key={link.path} 
            active={location.pathname.includes(link.path)}
            customFolder={index>=5? true: false}
            />
        })}
      </div>
    </div>
  )
})

export default LeftBar;