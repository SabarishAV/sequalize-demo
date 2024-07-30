'use strict';
import { sequelize } from "../config.js";
import { DataTypes } from "sequelize";
export const Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});

  Teacher.associate = function(models) {
    Teacher.hasMany(models.Student, {
      foreignKey: 'teacherId',
      as: 'students',
    });
  };
