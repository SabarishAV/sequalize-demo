import {Teacher} from "../models/teacherDB.js"

export const getAllTeachers = async (req, res) => {
    try {
      const teachers = await Teacher.findAll({
        attributes: ["id", "name", "email"],
      });
      res.json(teachers);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
  };

  export const getTeacher = async (req, res) => {
    const { id } = req.params;
  
    try {
      const teacher = await Teacher.findOne({
        where: {
          id,
        },
      });
      console.log("Teacher:", teacher);
      res.json(teacher);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const createTeacher = async (req, res) => {
    const { name, email } = req.body;
  
    try {
      const newTeacher = await Teacher.create({
        name,
        email,
      });
  
      res.json(newTeacher);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const updateTeacher = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
  
    try {
      const teacher = await Teacher.findByPk(id);
      teacher.name = name;
      teacher.email = email;
      await teacher.save();
  
      res.json(teacher);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


  export const deleteTeacher = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Teacher.destroy({
        where: {
          id,
        },
      });
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };