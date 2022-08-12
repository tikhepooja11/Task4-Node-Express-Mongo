const mongoose = require('mongoose');

const employeeModel = require('../models/employee')


const createEmployee = function (request,response){
    console.log("inside createEmployee() method");
    const { fullName, email, mobile, city } = request.body;
    const newEmployee = new employeeModel({
        _id: new mongoose.Types.ObjectId(),
        fullName,
        email,
        mobile,
        city,
    });
    console.log(newEmployee);

    // console.log(`hello pooja you are here`)
    // var start = Date.now();
    // console.log(start)
    // response.on('header', function() {
    //     var duration = Date.now() - start;
    //     // log duration
    //     console.log('%s %s %s %s', request.method, request.url, start, duration);  
    // });


    return newEmployee
        .save()
        .then((newEmployee) => response.send(newEmployee))
        .catch((error)=> response.json({message: 'employee cannot be created'}))


}

const getAllEmployees = function (req,res){
    return employeeModel.find()
            .then((employees) => res.status(200).send(employees))
            .catch((error)  => res.status(404).send(error).json({message: 'Cannot load employees'}));
};

const getEmpById = function(req,res){
    console.log(`inside getEmpById()`);
    const employeeId = req.params.employeeId;
    return employeeModel.findById(employeeId)
            .then((employee) => res.send(employee))
            .catch((error) => res.status(404).send(error).json({message: 'employee id not found'}))

}

const updateEmployee = function(req,res)  {
    console.log(`inside updateEmployee()`);
    const employeeId = req.params.employeeId;
    return employeeModel.findByIdAndUpdate(employeeId)
            .then((employee) => {
                if(employee)
                {
                    employee.set(req.body);
                    return employee
                    .save()
                    .then((employee) => res.status(201).send(employee).json({message: 'employee Updated'}))
                    .catch((error)  => res.status(500).send(error).json({message: 'Internal server Error'}));
                }
                else
                {
                    res.status(404).json(({message: 'Error in Updating Employee, Employee is Null'}));
                }
            })
            .catch((error) => res.status(404).send(error).json({message: 'Employee with this ID not found'}));
}
const deleteEmployee = function(req,res){
    console.log(`inside deleteEmployee()`);
    const employeeId = req.params.employeeId;
    
    return employeeModel.findByIdAndDelete(employeeId)
        .then((employee) => (employee ?
                            res.status(201).json({message: 'Employee deleted'}) :
                            res.status(404).json({message: 'Error in deleting employee'})))
        .catch((error) => res.status(500).send(error).json({ message: 'employeeId Not Found' }));
}
module.exports = { createEmployee, getAllEmployees, getEmpById, updateEmployee, deleteEmployee}
// module.exports = createEmployee;