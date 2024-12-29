const express = require('express')
const router = express.Router()
const {getCourses} = require('../controllers/courseControllers')

router.get('/courses', getCourses);
router.get('/subjectnames', )

module.exports = router