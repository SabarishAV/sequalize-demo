'use strict';
import { sequelize } from "../config.js";
import { DataTypes } from "sequelize";
export const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    teacherId: DataTypes.INTEGER,
  }, {});

  Student.associate = function(models) {
    Student.belongsTo(models.Teacher, {
      foreignKey: 'teacherId',
      as: 'teacher',
    });
  };

