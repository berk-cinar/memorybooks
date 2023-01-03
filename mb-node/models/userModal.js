     const mongoose = require('mongoose');
 const userModel = mongoose.model("user", {
          title: String,
          description: String,
          imageUrl: String,
     });

     
     module.exports = userModel