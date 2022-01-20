const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videos = new Schema({
  titulo: String,
  descripcion: String,
  duracion: Number,
}, {
  timestamps: true
})

module.exports = mongoose.model("videos", videos)