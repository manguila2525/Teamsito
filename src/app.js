require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require("./dbs")
const { ensureToken, verifyToken } = require('./helpers/handleToken')
const port = process.env.PORT

//CONFIG
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

//ROUTES
app.get('/api/protegida', ensureToken, verifyToken, (req, res) => {
  res.send("Ok estamos dentro")
})
app.use('/api/users', require('./routes/users.routes'))
app.use('/api/videos', ensureToken, verifyToken, require('./routes/videos.routes'))
app.use('/auth', require('./routes/auth.routes'))
//SERVER LISTEN
app.listen(port, () => console.log(`Example app listening on port ${port}!`))