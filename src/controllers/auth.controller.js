const userModel = require('../models/Users.model')
const { encrypt, compare } = require('../helpers/handleBcrypt')
// const { signToken } = require('../helpers/handleToken')
const jwt = require('jsonwebtoken')

const loginCtrl = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await userModel.findOne({ username })
    const checkPassword = await compare(password, user.password)
    const token = jwt.sign({ user }, process.env.SECRET_TOKEN_KEY)

    if (checkPassword) {
      res.status(200)
      res.json({ user, token })
      return
    }
    if (!checkPassword) {
      res.json({
        error: "Invalid password"
      })
      return
    }

  } catch (e) {
    res.json({ error: "Error in LoginCtrl" })
  }
}

const registerCtrl = async (req, res) => {
  try {
    const { nombre, apellido, edad, username, password } = req.body
    const passwordHash = await encrypt(password)
    const registerUser = await userModel.create({
      nombre,
      apellido,
      edad,
      username,
      password: passwordHash
    })

    res.json({ data: registerUser })
  } catch (e) {
    res.json({
      message: `Error register user ${e}`
    })
  }
}

module.exports = { loginCtrl, registerCtrl }