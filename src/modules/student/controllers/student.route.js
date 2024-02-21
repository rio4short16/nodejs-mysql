const express = require("express");
const router = express.Router();

const {
  fetchStudents,
  insertStudent,
  fetchStudentById,
  updateStudent,
  deleteStudent,
} = require("../services/student.service");

router.get("/", async (_, res) => {
  try {
    const students = await fetchStudents();
    return res.status(200).json({
      success: true,
      data: students,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    await insertStudent(firstName, lastName);

    return res.status(201).json({
      success: true,
      message: `Student has been inserted!`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const studentId = Number(+req.params.id);
    const studentExists = await fetchStudentById(studentId);
    if (!studentExists) {
      return res.status(404).json({
        success: false,
        message: `Student ID doesn't exists from the database.`,
      });
    }

    const { firstName, lastName } = req.body;
    await updateStudent(studentExists.student_id, firstName, lastName);

    return res.status(200).json({
      success: true,
      message: `Student has been updated!`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const studentId = Number(+req.params.id);
    const studentExists = await fetchStudentById(studentId);
    if (!studentExists) {
      return res.status(404).json({
        success: false,
        message: `Student ID doesn't exists from the database.`,
      });
    }

    await deleteStudent(studentExists.student_id);

    return res.status(200).json({
      success: true,
      message: `Student has been deleted!`,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
});

module.exports = router;
