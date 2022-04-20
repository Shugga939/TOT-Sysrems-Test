import { useEffect, useState } from "react";
import LeftBar from "../components/LeftBar/LeftBar";
import LetterBoard from "../components/LetterBoard/LetterBoard";
import { IEmail } from "../types/types";
import pageStyle from './pagesStyle.module.scss'



const LetterPage = () => {
  const [letter, setLetter] = useState<IEmail>({author: '', text: '', date: 0, id:'0'})

  useEffect(()=> {
    const letter = {author: 'Bill', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: Date.now(),id:'123sad'}
    setLetter(letter)
  },[])
  
  return (
    <div className={pageStyle.letterPage}>
      <LeftBar/>
      <div className={pageStyle.rightBar}>
        <LetterBoard letter={letter}/>
      </div>
    </div>
  )
}

export default LetterPage;