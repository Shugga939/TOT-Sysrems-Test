import {makeAutoObservable} from 'mobx'
import { IEmail } from '../types/types'


interface ILettersStore {
  [flodersName: string] : IEmail[],
}

export default class LettersStore {
  private _lettersInFolder: ILettersStore
  private _foundResultLetters:IEmail[]

  constructor () {
    this._lettersInFolder = {}
    this._foundResultLetters = []

    makeAutoObservable(this)
  }

  setLetters (letters:IEmail[],foldersName: string) {
    this._lettersInFolder[foldersName] = letters
  }

  setLetter (letter:IEmail,foldersName:string) {
    this._lettersInFolder[foldersName].push(letter)
  }

  getLetters (foldersName:string):IEmail[] {
    return this._lettersInFolder[foldersName]
  }
  
  getLetter (foldersName:string, idLetter:string):IEmail | undefined {
    const currentFolder = this._lettersInFolder[foldersName]
    if (currentFolder) {
      for (let index = 0; index < currentFolder.length; index++) {
        if (currentFolder[index]._id === idLetter) {
          return currentFolder[index]
        }
      }
    } else {
      return undefined
    }
  }

  setFoundResult (letters:IEmail[]) {
    this._foundResultLetters = letters
  }

  getFoundResult (letters:IEmail[]) {
     return this._foundResultLetters 
  }


  // sortLetters (foldersName:string) { //todo
  // }

} 
