'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Employee.init({
    last: DataTypes.STRING,
    first: DataTypes.STRING,
    title: DataTypes.STRING,
    street1: DataTypes.STRING,
    street2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    yearstarted: DataTypes.INTEGER,
    salary: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
    timestamps: false,
    tableName: 'employees'
  });
  return Employee;
};