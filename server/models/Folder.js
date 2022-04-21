import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Folder = new Schema({
  name: {type: String, unique: true, required: true},
  letters: {type: Array, required: true},
})

export default mongoose.model('Folder', Folder)