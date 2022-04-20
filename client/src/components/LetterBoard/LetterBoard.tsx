import { FC } from 'react';
import { dateFormatting } from '../../helpers/helpers';
import { IEmail } from '../../types/types';
import style from './letterBoard.module.scss'

interface LetterBoardProps {
  letter : IEmail
}

const LetterBoard: FC<LetterBoardProps> = ({letter}) => {
  return (
    <div className={style.letterBoard}>
      <div className={style.author}>
        <h1>Author: {letter.author}</h1>
      </div>
      <div className={style.text} >
        <h4>Text: </h4>
        <div> {letter.text} </div>
      </div>
      <div className={style.date}>
        <h4> {dateFormatting(letter.date)} </h4> 
      </div>
  </div>
  )
}

export default LetterBoard;