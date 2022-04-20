import React, { useContext, useState } from 'react';
import styles from './LeftBar.module.scss'
import { Link, useLocation } from 'react-router-dom';
import { DRAFTS_ROUTE, INBOX_ROUTE, SENT_ROUTE, SPAM_ROUTE, TRASH_ROUTE } from '../../utils/consts';
import MailLink from '../ui/LinkFolder/LinkFolder';
import EditModal from '../EditModal/EditModal';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';


const LeftBar = observer(() => {
  const {folders} = useContext(Context)
  const location  = useLocation()
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false)

  const createFolder = (foldersName:string) => {
    if (foldersName !== '')  {     // || !== start value
      console.log('save' + foldersName)   // axios
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
        {folders.getForlders().map((link)=> {
          return <MailLink 
            path={link.path} 
            text={link.name} 
            key={link.path} 
            active={location.pathname.includes(link.path)}
            customFolder={false}
            />
        })}
      </div>
    </div>
  )
})

export default LeftBar;