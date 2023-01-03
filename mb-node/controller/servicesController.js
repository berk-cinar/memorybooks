const jwt = require('jsonwebtoken')
const servicesModel = require('../models/servicesModel')
const userModel = require("../models/userModal")

module.exports.getServices = async (req, res) => {
     const _data = await servicesModel.find({})
     if(_data) {
          return res.send({code:200, message: "success", data: _data   })
     } else {
          return res.send({code:500, message: "Service Error" })
     }
}

module.exports.addServices =  async(req, res) => {

     console.log("req.file:",req.file, "req.body:",req.body, 14)
     console.log("consoll")

     if(!req.headers.authorization){
          return res.send({code:403, message: "No Token"})
     }

     const userDetail = await  jwt.verify(req.headers.authorization, "PRIV_123")
     console.log(userDetail._doc.type, 20)

     if(userDetail._doc.type !== "ADMIN"  &&  userDetail._doc.type !== "SUBADMIN" ) {
          return res.send({code: 403, message: "UnauthorizedSD."})
     }

     if(userDetail.iat - new Date().getTime() > 3.6e+6  ){
          return res.send({code:"403", message:"Token Expired"})
     }

     const title = req.body.title
     const description = req.body.description
     const imageUrl = req.file.path 

     if(!title || !description  || !imageUrl ) {
          return res.send({ code:400, message: "Bad Request" })
          }

     const newService = new servicesModel({ title: title, description: description , imageUrl: imageUrl  })

     const success = await newService.save()


     if(success){
          return res.send({code:200, message: "success" })
     } else {
          return res.send({code:500, message: "Service Error" })
     }
}