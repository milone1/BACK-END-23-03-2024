/* eslint-disable eol-last */
const express = require('express')
const { getCourses, createCourses, updateCourses, deleteCourses } = require('../controllers/courses')
const router = express.Router()
const multer = require('multer')
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const checkAuth = require('../middleware/auth')
const cloudinary = require('cloudinary').v2

// Configurar Cloudinary
cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: ''
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
router.post('/', checkAuth, parser.fields([{ name: 'image', maxCount: 1 }, { name: 'portada', maxCount: 1 }]), createCourses)
router.put('/:id', updateCourses)
router.delete('/:id', deleteCourses)

module.exports = router