import {Student} from "../models/studentDB.js"

export const getAllStudents = async (req, res) => {
    try {
      const students = await Student.findAll({
        attributes: ["name", "email", "teacherId"],
      });
      res.json(students);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
  };

  export const getStudent = async (req, res) => {
    const { id } = req.params;
  
    try {
      const student = await Student.findOne({
        where: {
          id,
        },
      });
      console.log("Student:", student);
      res.json(student);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const createStudent = async (req, res) => {
    const { name, email, teacherId } = req.body;
  
    try {
      const newStudent = await Student.create({
        name,
        email,
        teacherId
      });
  
      res.json(newStudent);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, email, teacherId } = req.body;
  
    try {
      const student = await Student.findByPk(id);
      project.name = name;
      project.email = email;
      project.teacherId = teacherId;
      await student.save();
  
      res.json(student);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  export const deleteStudent = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Student.destroy({
        where: {
          id,
        },
      });
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };