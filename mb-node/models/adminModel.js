const mongoose = require('mongoose');

const adminModel = mongoose.model("admin", {
        userName:String,
        password: String,
        type:String,
     status: String,
     date: String,
});

module.exports = adminModel

adminModel.create({
        userName: "admin-default",
        password: "pass123",
        type:"ADMIN",
     status:"ACTIVE",
     date: new Date(),
})