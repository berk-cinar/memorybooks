     const mongoose = require('mongoose');

     module.exports = mongoose.model("Services2", {
          title: String,
          description: String,
          imageUrl: String,
     });