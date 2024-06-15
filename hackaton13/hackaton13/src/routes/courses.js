/* eslint-disable eol-last */
const express = require('express')
const { getCourses, createCourses, updateCourses, deleteCourses } = require('../controllers/courses')
const router = express.Router()
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const cloudinary = require('cloudinary').v2

// Configurar Cloudinary
cloudinary.config({
  cloud_name: 'dijacbsqo',
  api_key: '914193487545775',
  api_secret: 'SrlLtPj_VWRYOF81oQuHXqetv6I'
})

// storage of cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png']
  }
})
const parser = multer({ storage })

router.get('/', getCourses)
router.post('/', parser.fields([{ name: 'image', maxCount: 1 }, { name: 'portada', maxCount: 1 }]), createCourses)
router.put('/update/:id', updateCourses)
router.delete('/delete/:id', deleteCourses)

module.exports = router

// REALIZQRR EL UPDATE AND DELETE PARA LAS RUTAS DE CURSOS