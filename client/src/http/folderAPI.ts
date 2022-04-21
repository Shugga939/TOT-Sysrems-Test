import {$host} from './index.js'

export const getFolders = async ()=> {
  const response = await $host.get('mail/folders')
  return response
}

export const addFolder = async (folderName:string)=> {
  const response = await $host.post('mail/folders', {folderName})
  return response
}

export const editFolder = async (folderID:string, name:string | undefined)=> {
  const response = await $host.put('mail/folders', {folderID, name})
  return response
}

export const getAllLetters = async (path:string)=> {
  const response = await $host.get('mail/'+path)
  return response
}

export const getLetter = async (folderID:string, letterID:string)=> {
  const response = await $host.get(`mail/${folderID}/${letterID}`)
  return response
}

