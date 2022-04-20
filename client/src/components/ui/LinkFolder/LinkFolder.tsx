import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmModal from '../../ConfirmModal/ConfirmModal';
import EditModal from '../../EditModal/EditModal';
import styles from './LinkFolder.module.scss'

interface LinkProps {
  path: string;
  text: string
  active: boolean
  customFolder: boolean
}

const MailLink = ({path, text, active, customFolder}:LinkProps) => {

  const [optionsOpen,setOptionsOpen] = useState<boolean>(false)
  const [editModalOpen,setEditModalOpen] = useState<boolean>(false)
  const [removeModalOpen,setRemoveModalOpen] = useState<boolean>(false)
  //const foldersName = Context // get from mobX folder's name


  const handlerOptions = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setOptionsOpen(!optionsOpen)
  }

  const openDeleteModal = ()=> {
    setRemoveModalOpen(true)
    setOptionsOpen(false)
  }

  const openEditModal = ()=> {
    setEditModalOpen(true)
    setOptionsOpen(false)
  }

  const deleteFolder = (event:React.MouseEvent)=> {
    console.log('delete')         // axios 
    setRemoveModalOpen(false)
  }

  const saveFoldersName = (foldersName:string)=> {
    if (foldersName !== '')  {     // || !== start value
      console.log('save' + foldersName)   // axios 
      setEditModalOpen(false)
    } 
  }

  return (
    <>
     <ConfirmModal 
        setShow={setRemoveModalOpen} 
        show={removeModalOpen} 
        callback={deleteFolder}
        message={'Удалить папку?'}
      />
      <EditModal    
        setShow={setEditModalOpen} 
        show={editModalOpen} 
        callback={saveFoldersName}
        message={'Переименовать папку'}
        inputsPlaceholder={path}
      />

      {!customFolder?
        <Link to={path} className={active? `${styles.activeMailLink} ${styles.mailLink}`: styles.mailLink}> {text} </Link>
      :
        <Link to={path} className={active? `${styles.activeMailLink} ${styles.mailLink}`: styles.mailLink}> {text}
          <button className={active? styles.optionButton : `${styles.optionButton} ${styles.optionButton__hide}`} onClick={handlerOptions}/>
          <div className={optionsOpen? styles.options : styles.hide}>
            <button className={styles.edit} onClick={openEditModal} >Переименовать</button>
            <button className={styles.delete} onClick={openDeleteModal}> Удалить </button>
          </div>
        </Link>
      }
    </>
  )
}

export default MailLink;