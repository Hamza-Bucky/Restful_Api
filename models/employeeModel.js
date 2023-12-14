const mongoose = require('mongoose')

const employeeSchemae = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter employee name"]
        },
        ID: {
            type: Number,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)


const Employee = mongoose.model('Employee', employeeSchemae);

module.exports = Employee;