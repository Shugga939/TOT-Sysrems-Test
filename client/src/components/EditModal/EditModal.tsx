import React, { MouseEventHandler, Ref, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './EditModal.module.scss'

interface EditModalProps {
  show: boolean
  setShow: Function
  message: string
  callback: Function
  inputsPlaceholder: string
}

const EditModal = ({show, setShow, message, callback,inputsPlaceholder}:EditModalProps) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const closeModal = (event:React.MouseEvent)=> {
    event.preventDefault()
    const { classList } = event.target as HTMLElement;
    if (classList.contains(styles.modalMessageBackground) || 
        classList.contains(styles.closeMessageButton)) {
          setShow(false)
    }
  }

  const saveChanges = (event:React.MouseEvent)=> {
    event.preventDefault()
    callback(inputRef.current?.value)
  }
  
  return(
    <form className={show? styles.modalMessageBackground: styles.hide} onClick={closeModal}>
      <div className={styles.modalMessageContainer}>
        <button className={styles.closeMessageButton} onClick={closeModal}/>
        <div className={styles.message}>{message}</div>
        <input 
          type="text" 
          className={styles.changeInput}  
          placeholder={inputsPlaceholder}
          ref={inputRef}
        />
        <div className={styles.buttonsContainer}>
          <button type='submit' onClick={saveChanges}>Сохранить</button>
        </div>
      </div>
    </form>
  )
}

export default EditModal