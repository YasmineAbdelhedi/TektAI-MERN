const Course = require('../models/CourseModel');




exports.searchCourseByTitle = async (req, res) => {
  try {
    const { title } = req.params;

    const regex = new RegExp(title, 'i');

    const courses = await Course.find({ title: regex });

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to search courses', error: error.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deleteCourse = async (req, res) => {
  const { title } = req.params;
  try {
    const deletedCourse = await Course.findByIdAndDelete(title);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


