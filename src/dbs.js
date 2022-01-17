const mongoose = require('mongoose')

const DBS = process.env.DBS

mongoose.connect(DBS)
  .then(res => console.log("*** DB CONECTADA ***"))
  .catch(err => console.error(err))

module.exports = mongoose