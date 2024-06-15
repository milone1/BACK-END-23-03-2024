/* eslint-disable eol-last */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const courseModel = require('../models/Course')

const getCourses = async (req, res) => {
  try {
    const getAllCourses = await courseModel.find()

    res.status(200).json(getAllCourses)
  } catch (error) {
    return res.status(404).json({ msg: error })
  }
}

const createCourses = async (req, res) => {
  try {
    const { nombre, descripcion, valor } = req.body
    const imagePath = req.files.image[0].path
    const portada = req.files.portada[0].path

    const createdCourse = await courseModel.create({ nombre, descripcion, portada, valor, img: imagePath })
    // console.log(createdCourse)
    return res.status(200).send(createdCourse)
  } catch (error) {
    return res.status(404).json({ msg: error })
  }
}
const updateCourses = async (req, res) => {
  try {
    res.status(200).send('Hi courses')
  } catch (error) {
    return res.status(404).json({ msg: error })
  }
}

const deleteCourses = async (req, res) => {
  try {
    res.status(200).send('Hi courses')
  } catch (error) {
    return res.status(404).json({ msg: error })
  }
}

module.exports = { getCourses, createCourses, updateCourses, deleteCourses }