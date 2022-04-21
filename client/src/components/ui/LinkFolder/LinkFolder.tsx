import { AxiosResponse } from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../..';
import { editFolder } from '../../../http/folderAPI';
import ConfirmModal from '../../ConfirmModal/ConfirmModal';
import EditModal from '../../EditModal/EditModal';
import styles from './LinkFolder.module.scss'

interface LinkProps {
  path: string;
  id: string;
  text: string
  active: boolean
  customFolder: boolean
}

const MailLink = ({path, text, active, customFolder, id}:LinkProps) => {

  const {folders} = useContext(Context)
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
    try{
      (async ()=> {
      await editFolder(id,undefined)
    })()
    folders.setDeleteFolder(id)
    } catch (e) {
      console.log(e)
    }
    setRemoveModalOpen(false)
  }

  const saveFoldersName = (foldersName:string)=> {
    if (foldersName !== '')  {     // || !== start value
      try{
        (async ()=> {
        await editFolder(id,foldersName)
      })()
      folders.setEditFolder(id, foldersName)
      } catch (e) {
        console.log(e)
      }
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
        inputsPlaceholder={text}
      />

      {!customFolder?
        <Link to={path} className={active? `${styles.activeMailLink} ${styles.mailLink}`: styles.mailLink}> {text} </Link>
      :
        <Link to={path} className={active? `${styles.activeMailLink} ${styles.mailLink}`: styles.mailLink}>
          <div className={styles.text}> {text} </div>
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