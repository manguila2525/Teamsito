const bcryptjs = require('bcryptjs');

const encrypt = async (textPlain) => {
  const hash = await bcryptjs.hash(textPlain, 10)
  return hash
}

const compare = async (passwordPlain, hashPassword) => {
  const passwordCompare = await bcryptjs.compare(passwordPlain, hashPassword)
  return passwordCompare
}

module.exports = { encrypt, compare }