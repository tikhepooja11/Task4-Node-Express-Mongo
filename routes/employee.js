const mongoose = require('mongoose');
const express = require('express');
const EmployeeController = require('../controllers/employee')
const router = express.Router();

// router.post('/create', EmployeeController.createEmployee)
router.post('/create', EmployeeController.createEmployee)
router.get('/getAllEmployees', EmployeeController.getAllEmployees);
router.get('/getEmpById/:employeeId', EmployeeController.getEmpById);
router.put('/updateEmployee/:employeeId', EmployeeController.updateEmployee);
router.delete('/deleteEmployee/:employeeId', EmployeeController.deleteEmployee);
module.exports = router;

