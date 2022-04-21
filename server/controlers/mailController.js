import Folder from '../models/Folder.js'
import Letter from '../models/Letter.js'

class mailController {

  async getFolders (req, res) {
    const allFolders = await Folder.find()
    const foldersNames = allFolders.map((folder)=> {
      return ({
        path: `/mail/${folder._id}`,
        name: folder.name,
        id: folder._id
      })
    })
    return res.json(foldersNames)
  }

  async addFolder (req, res) {
    const {folderName} = req.body
    const newFolder = new Folder({name: folderName, letters: []})
    await newFolder.save()
    return res.json({
      path: `/mail/${newFolder._id}`,
      name: newFolder.name,
      id: newFolder._id
    })
  }

  async editFolder (req, res) {
    const {folderID, name} = req.body
    if (!name) {
      await Folder.deleteOne({_id: folderID})
    } else {
      await Folder.updateOne({_id: folderID}, { $set: {name : name}})
    }
    
  }

  async getAllLetters (req, res) {
    let {folder} = req.params
      const allFolders = await Folder.findOne({_id: folder})
      return res.json(allFolders.letters)
  }

  async getLetter (req, res) {
    let {id} = req.params 
    const currentLetter = await Letter.findOne({_id: id})
    return res.json(currentLetter)
  }

}

export default new mailController()


// const message = new Letter({author: 'Trash Test', date:Date.now(), text:'There are a lot of unnecessary letters here'})  // for add new letters
// message.save()
// await Folder.updateOne({_id:folderName}, {$push: {letters: message} })