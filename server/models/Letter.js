import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Letter = new Schema({
  author: {type: String, required: true},
  text: {type: String, required: true},
  date: {type: Number, required: true}
})

export default mongoose.model('Letter', Letter)