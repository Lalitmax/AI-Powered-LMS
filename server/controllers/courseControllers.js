const Course = require('../models/courseModels');

const getCourses = async (req, res) => {
    console.log(123)
  try {
    const allCourses = await Course.find();
    console.log(allCourses);
    if (!allCourses || allCourses.length === 0) {
      return res.json({
        message: "There are no courses available.",
      });
    }
    res.status(200).json({
      success: true,
      courses: allCourses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error ffff",
    });
  }
};

module.exports = { getCourses };
