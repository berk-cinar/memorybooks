const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const cors = require("cors")

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/test", (err) => {
     if (err) {
          console.log("DB Err.")
     } 
     else {
          console.log("DB Connected.")
     }
});
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.log('Connection failed with - ',err));

app.listen(5000, () => {
     console.log("Backend running at port 5000")
})