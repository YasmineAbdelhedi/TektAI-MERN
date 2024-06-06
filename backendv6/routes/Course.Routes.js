const express = require('express');
const router = express.Router();
const courseController = require('../controllers/CourseCtrl');








router.get('/search/:title', courseController.searchCourseByTitle);
router.post('/create', courseController.createCourse);
router.get('/display', courseController.getAllCourses);
router.delete('/:title', courseController.deleteCourse);
module.exports = router;
