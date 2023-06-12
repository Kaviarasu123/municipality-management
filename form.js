const mongoose = require('mongoose');

const form = new mongoose.Schema({
  typeofproblem: {
    type: String,
    required: true,
  },
  describe: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  district:{
    type: String,
    required: true
  },
  pincode: {
    type: Number,
    required: true
  }
})
module.exports = mongoose.model('form', form)