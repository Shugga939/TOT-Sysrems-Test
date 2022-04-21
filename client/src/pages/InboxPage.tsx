import { AxiosResponse } from "axios";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "..";
import LeftBar from "../components/LeftBar/LeftBar";
import LettersLink from "../components/LettersLink/LettersLink";
import List from "../components/List/List";
import SearchBar from "../components/SearchBar/SearchBar";
import { getAllLetters } from "../http/folderAPI";
import { IEmail } from "../types/types";
import pageStyle from './pagesStyle.module.scss'


function renderItem (array:IEmail) {
  return (
    <LettersLink
      author={array.author}
      text={array.text}
      date={array.date}
      id={array._id}
      key={array._id}
    />
  )
}

const InboxPage = observer(() => {
  const {letters} = useContext(Context)
  const [lettersInCurrentFolder, setLettersInCurrentFolder] = useState<IEmail[]>()
  const {pathname} = useLocation()
  const currentIDFolder = pathname.split('/')[2]

  useEffect(()=> {
    let lettersCurrentFolder = letters.getLetters(currentIDFolder)
    if (!lettersCurrentFolder) {
      (async ()=> {
        const response: AxiosResponse<any> = await getAllLetters(currentIDFolder)
        letters.setLetters(response.data, currentIDFolder)
        setLettersInCurrentFolder(letters.getLetters(currentIDFolder))
      })()
    } else {
      setLettersInCurrentFolder(letters.getLetters(currentIDFolder))
    }
  },[currentIDFolder])

  return (
    <div className={pageStyle.mailPage}>
      <LeftBar/>
        <div className={pageStyle.rightBar}>
          <SearchBar/>
          <List items={lettersInCurrentFolder} renderItem={renderItem} className='lettersList'></List>
        </div>
    </div>
  )
})

export default InboxPage;