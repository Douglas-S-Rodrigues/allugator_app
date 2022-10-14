const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('../middlewares/multer');

const imgUpload = Router();

imgUpload.post('/posts', multer(multerConfig).single('file'), (req, res) => {
  return res.json({ hello: 'App'})
})

module.exports = imgUpload;