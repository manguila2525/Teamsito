const mongoose = require('mongoose')
const Schema = mongoose.Schema

const users = new Schema({
  nombre: String,
  apellido: String,
  edad: Number,
  username: String,
  password: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('users', users)