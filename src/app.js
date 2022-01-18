require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require("./dbs")
const port = process.env.PORT

//CONFIG
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//ROUTES
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/videos', require('./routes/videos.routes'))

//SERVER LISTEN
app.listen(port, () => console.log(`Example app listening on port ${port}!`))