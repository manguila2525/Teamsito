const Users = require('../models/Users.model')

const getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200)
    res.json(users)
  } catch (e) {
    res.status(400)
    res.json("Errors find users")
  }
}

const createUser = async (req, res) => {
  try {

    const user = await Users.create(req.body)
    res.json(user)
  } catch (e) {
    res.json(e)
  }
}


module.exports = { getUsers, createUser }