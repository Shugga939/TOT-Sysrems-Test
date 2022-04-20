import { useEffect, useState } from "react";
import LeftBar from "../components/LeftBar/LeftBar";
import LettersLink from "../components/LettersLink/LettersLink";
import List from "../components/List/List";
import SearchBar from "../components/SearchBar/SearchBar";
import { IEmail } from "../types/types";
import pageStyle from './pagesStyle.module.scss'


function renderItem (array:IEmail) {
  return (
    <LettersLink
      author={array.author}
      text={array.text}
      date={array.date}
      id={array.id}
      key={array.id}
    />
  )
}

const InboxPage = () => {

  const [lettersInCurrentFolder, setLettersInCurrentFolder] = useState<IEmail[]>()

  useEffect(()=> {
    
    const emails: IEmail[] = [            //axios to current folder id
      {author: 'Alex', date:Date.now(), text:'Welcome kasmd', id: '1'},
      {author: 'Igor', date:Date.now()-500000000, text:'Hello', id: '2'},
      {author: 'Artem', date:Date.now()-5000000000, text:'Hi', id: '3'},
    ]
    setLettersInCurrentFolder(emails)
  },[])

  return (
    <div className={pageStyle.mailPage}>
      <LeftBar/>
        <div className={pageStyle.rightBar}>
          <SearchBar/>
          <List items={lettersInCurrentFolder} renderItem={renderItem} className='lettersList'></List>
        </div>
    </div>
  )
}

export default InboxPage;