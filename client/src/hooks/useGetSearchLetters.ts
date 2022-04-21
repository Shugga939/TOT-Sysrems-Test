import { useMemo } from "react"
import { IEmail } from "../types/types";


export const useGetSearchLetters = (letters:IEmail[] | undefined, searchValue: string)=> useMemo(()=> {
  let arr:IEmail[] = []
  if (letters && searchValue!== '')  {
    letters.forEach(letter => {
      if (letter.text.toLowerCase().includes(searchValue.toLowerCase()) || 
          letter.author.toLowerCase().includes(searchValue.toLowerCase())) {
        arr.push(letter)
      }
    });
  }
  return arr
},[letters,searchValue])
