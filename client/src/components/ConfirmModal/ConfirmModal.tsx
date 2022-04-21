import React, { MouseEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ConfirmModal.module.scss'

interface ConfirmModalProps {
  show: boolean
  setShow: Function
  message: string
  callback: MouseEventHandler
}

const ConfirmModal = ({show, setShow, message, callback}:ConfirmModalProps) => {

  const closeModal = function(event:React.MouseEvent) {
    event.preventDefault()
    const { classList } = event.target as HTMLElement;
    if (classList.contains(styles.modalMessageBackground) || 
        classList.contains(styles.closeMessageButton)) {
          setShow(false)
    }
  }
  
  return(
    <div className={show? styles.modalMessageBackground: styles.hide} onClick={closeModal}>
      <div className={styles.modalMessageContainer}>
        <button className={styles.closeMessageButton} onClick={closeModal}/>
        <div className={styles.message}>{message}</div>
        <div className={styles.buttonsContainer}>
          <button onClick={()=>setShow(false)}>Нет</button>
          <button onClick={callback}>Да</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal