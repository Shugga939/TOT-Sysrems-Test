import styles from './LettersLink.module.scss'
import {dateFormatting} from './../../helpers/helpers'
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

interface LettersLinkProps {
  author: string
  text: string
  date: number
  id: string
}

const LettersLink = ({author, text, date,id}:LettersLinkProps) => {
  const navigate = useNavigate();
  const {pathname} = useLocation()

  const openLetter = (event: React.MouseEvent<HTMLDivElement>)=> {
    const { classList } = event.target as HTMLDivElement;
    if (classList.value === styles.author ||
        classList.value === styles.preview ||
        classList.value === styles.time) {
      navigate(pathname+'/'+id)
    }
  }

  return (
    <div className={styles.linkContainer} onClick={openLetter}>
      <div className={styles.checkbox}>
        <input type="checkbox" name="pick" />
      </div>
      <div className={styles.favouriteButton}>
        <input type="checkbox" name="favourite" />
      </div>
      <div className={styles.author}> {author} </div>
      <div className={styles.preview}> {text} </div>
      <div className={styles.time}> {dateFormatting(date)} </div>
      <div className={styles.optionsContainer}>
        <div className={styles.deleteButton}>
          <button className={styles.delete}> Delete </button>
        </div>
      </div>
    </div>
  )
}

export default LettersLink;
