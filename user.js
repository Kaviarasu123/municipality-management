const mongoose = require('mongoose');

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  // token:{
  //   type: String,
  //   required: true
  // },
  created_timestamp: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('user', user)