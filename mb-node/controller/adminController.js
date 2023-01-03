const adminModel = require('../models/adminModel')
const jwt = require ("jsonwebtoken")

module.exports.getAdmins = async (req, res) => {
     const _data = await adminModel.find({})
     if(_data) {
          return res.send({code:200, message: "success", data: _data   })
     } else {
          return res.send({code:500, message: "Service Error" })
     }
}
module.exports.addAdmins = async (req, res) => {

     const {userName, password, type, status, date } = req.body

     const _res = await adminModel.create({userName, password, type, status, date})
     if(_res) {
          return res.send({code:200, message: "success",   })
     } else {
          return res.send({code:500, message: "Service Error" })
     }
}
module.exports.loginAdmin = async (req, res) => {

     const {userName, password } = req.body

     const userExists = await adminModel.findOne({userName:userName})
     if(userExists) {
               if (userExists.password !== password){
                    return res.send({
                         code:400, 
                         message: "Username or password is wrong",   })
               }
               const _token = jwt.sign({...userExists}, "PRIV_123")

          console.log(userExists, 34)

          return res.send({
               code:200, 
               message: "login success", 
               token: _token, 
               type: userExists.type
          })

     } else {
          return res.send({code:500, message: "Service Error" })
     }
}


