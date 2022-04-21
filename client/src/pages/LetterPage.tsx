import { AxiosResponse } from "axios";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "..";
import LeftBar from "../components/LeftBar/LeftBar";
import LetterBoard from "../components/LetterBoard/LetterBoard";
import { getLetter } from "../http/folderAPI";
import { IEmail } from "../types/types";
import pageStyle from './pagesStyle.module.scss'



const LetterPage = observer(() => {
  const {letters} = useContext(Context)
  const {pathname} = useLocation()
  const [letter, setLetter] = useState<IEmail | null>(null)
  const folderId = pathname.split('/')[2]
  const letterId = pathname.split('/')[3]
  
  useEffect(()=> {
    const currentLetter:IEmail | undefined = letters.getLetter(folderId, letterId)
    if (currentLetter) {
      setLetter(currentLetter)
    } else {
      (async ()=> {
        const response: AxiosResponse<any> = await getLetter(folderId, letterId)
         console.log(response.data)
         setLetter(response.data)
      })()
    }
  },[])
  
  return (
    <div className={pageStyle.letterPage}>
      <LeftBar/>
      <div className={pageStyle.rightBar}>
        <LetterBoard letter={letter}/>
      </div>
    </div>
  )
})

export default LetterPage;