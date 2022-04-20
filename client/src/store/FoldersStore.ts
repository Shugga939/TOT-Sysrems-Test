import {makeAutoObservable} from 'mobx'
import { IFolder } from '../types/types'



export default class FoldersStore {
  _customFolders:IFolder[]

  constructor () {
    this._customFolders = []
    makeAutoObservable(this)
  }

  setFolders (folders:IFolder[]) {
    this._customFolders = folders
  }

  setFolder (folder:IFolder) {
    this._customFolders.push(folder)
  }

  getForlders () {
    return this._customFolders
  }


  // get currentUser () {   // {...user.currentUSer}
  //   return this._user
  // }

} 
