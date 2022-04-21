import {makeAutoObservable} from 'mobx'
import { IFolder } from '../types/types'



export default class FoldersStore { 
  private _customFolders: IFolder[]

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

  setDeleteFolder(id:string) {
    this.setFolders(this._customFolders.filter((el)=> {
      return el.id != id
    }))
  }
  
  setEditFolder(id:string, newName:string) {
    this._customFolders.forEach((el)=> {
      if (el.id === id) el.name = newName
    })
  }

  getForlders ():IFolder[] {
    return this._customFolders
  }

} 
