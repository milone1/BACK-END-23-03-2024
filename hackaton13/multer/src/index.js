const express = require('express')
const multer = require('multer')
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2

const app = express()

app.use(express.json())

// Configuration
cloudinary.config({ 
  cloud_name: "dijacbsqo", 
  api_key: "914193487545775", 
  api_secret: "SrlLtPj_VWRYOF81oQuHXqetv6I" // Click 'View Credentials' below to copy your API secret
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png']
  }
})

const parser = multer({storage})
// Configurar el endpoint para poder subir la imagen;
app.post('/upload', parser.single('image'),(req, res) => {
  if(!req.file) {
    return res.status(400).send('No file selected.')
  }

  res.status(200).send({imageUrl: req.file.path})
})

app.listen(3000, () => {
  console.log('The server is running on port', 3000);
})