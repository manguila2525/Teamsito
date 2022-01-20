const videosModel = require('../models/Videos.models')

const getVideos = async (req, res) => {
  res.send('Get Videos')
}

const getVideo = async (req, res) => {
  try {
    const { id } = req.params
    const video = await videosModel.findOne({ _id: id })
    res.status(200)
    res.json({
      video
    })
  } catch (err) {
    res.status(404)
    res.json({ Error: "Error in getVideo" })
  }
}

const createVideo = async (req, res) => {
  try {
    const { titulo, descripcion, duracion } = req.body
    const video = await videosModel.create({ titulo, descripcion, duracion })
    res.status(200)
    res.json({ video })
  } catch (err) {
    res.status(500)
    res.json({ Error: "Error in createVideo" })
  }
}

const updateVideo = async (req, res) => {
  try {
    const { id } = req.params
    const video = await videosModel.findOneAndUpdate({ _id: id },)

  } catch (err) {

  }
}

const deleteVideo = async (req, res) => {

}

module.exports = {
  getVideos,
  getVideo,
  createVideo,
  updateVideo,
  deleteVideo
}