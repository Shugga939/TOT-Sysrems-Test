import styles from './SearchBar.module.scss'
import React, { useContext, useState } from 'react'
import { useGetSearchLetters } from '../../hooks/useGetSearchLetters'
import { observer } from 'mobx-react-lite'
import { Context } from '../..'
import { Link, useLocation } from 'react-router-dom'
import { IEmail } from '../../types/types'
import List from '../List/List'

function renderItem (array:IEmail) {
  return (
    <Link to={array._id} key={array._id} className={styles.searchLetter}>
      <div className={styles.wrapperLink}>
        <div className={styles.searchLetterAuthor}>Автор: {array.author}</div>
        <div className={styles.searchLetterText}>{array.text}</div>
      </div>
    </Link>
  )
}

const SearchBar = observer(() => {
  const {letters} = useContext(Context)
  const [serchValue, setSerchValue] = useState<string>('')
  const {pathname} = useLocation()
  let foundLetters = useGetSearchLetters(letters.getLetters(pathname.split('/')[2]), serchValue)

  const searchHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSerchValue(event.target.value)

  }

  return (
    <div className={styles.searchBar}>
      <input 
        type="text"
        placeholder='Поиск в папке'
        className={serchValue===''? styles.searchInput : `${styles.searchInput} ${styles.searchInput__active}`} 
        value={serchValue} 
        onChange={searchHandler}/>
      <div className={serchValue===''? styles.serachResult : `${styles.serachResult} ${styles.serachResult__active}`}>
        <div className={styles.resultList}>
          <List items={foundLetters} renderItem={renderItem} className={styles.lettersList}></List>
        </div>
      </div>
    </div>
  )
})

export default SearchBar;
