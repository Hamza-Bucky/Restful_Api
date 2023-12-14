const express = require('express')
const { 
    getEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee } = require("../controller/employeeController");


const employeeRoute = express.Router();


employeeRoute.route('/').get(getEmployees).post(createEmployee)
employeeRoute.route('/:id').get(getEmployee).put(updateEmployee).delete(deleteEmployee)

module.exports = employeeRoute;
