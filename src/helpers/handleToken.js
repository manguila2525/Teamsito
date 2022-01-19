const res = require('express/lib/response')
const jwt = require('jsonwebtoken')
const express = require('express');
const signToken = async (user) => {
  return jwt.sign({ user }, process.env.SECRET_TOKEN_KEY)
}

const ensureToken = async (req, res, next) => {
  const bearerHeader = req.headers['authorization']
  console.log(bearerHeader)
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ")
    const bearerToken = bearer[1]
    req.token = bearerToken
    next()
  } else {
    res.send(403)
  }
}

const verifyToken = (req, res, next) => {
  jwt.verify(req.token, process.env.SECRET_TOKEN_KEY, (err, data) => {
    if (err) {
      res.sendStatus(403)
    } else {
      next()
    }
  })
}

module.exports = { signToken, ensureToken, verifyToken }