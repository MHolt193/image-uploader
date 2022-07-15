const express = require('express');
const router = express.Router();
const { getImage, uploadImage } = require('../controllers/imageController')

router.get('/:id', getImage);
router.post("/", uploadImage);

module.exports = router;