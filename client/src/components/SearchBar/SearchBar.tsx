import styles from './SearchBar.module.scss'
import React, { useState } from 'react'

interface SearchBarProps {
}

const SearchBar = ({}:SearchBarProps) => {
  const [serchValue, setSerchValue] = useState<string>('')

  const searchHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSerchValue(event.target.value)
    if (event.target.value!== '') {

    }
  }
  return (
    <div className={styles.searchBar}>
      <input 
        type="text"
        placeholder='Поиск по почте'
        className={serchValue===''? styles.searchInput : `${styles.searchInput} ${styles.searchInput__active}`} 
        value={serchValue} 
        onChange={searchHandler}/>
      <div className={serchValue===''? styles.serachResult : `${styles.serachResult} ${styles.serachResult__active}`}>
        <ul className={styles.resultList}>
          <li>123</li>
          <li>test</li>
          <li>tets2</li>
        </ul>
      </div>
    </div>
  )
}

export default SearchBar;
