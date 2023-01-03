const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require ('cors')
const servicesController = require('./controller/servicesController')
const adminController = require('./controller/adminController')

const multer = require("multer")
const app = express()
const upload = multer({dest:"uploads/"})

app.use('/uploads', express.static('uploads'))

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1', (err) => {
     if(err) {
          console.log("db err.")
     } else {
          console.log("db connected")
     }

     
     app.get('/hello', (req, res) =>{
          return res.send("Hello")
     })

     app.post('/api/services',upload.single("image"), servicesController.addServices  )
     app.get('/api/services', servicesController.getServices  )

     app.get("/admin/admins", adminController.getAdmins)
     app.post("/admin/add", adminController.addAdmins)
     app.post("/admin/login", adminController.loginAdmin)

     app.listen(5000, () => {
          console.log("Backend Running At Port 5000")
     })
});