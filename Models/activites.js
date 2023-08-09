const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activityschema =new Schema({
          head:{
            type: String,
            required: true
          },
          boximg1:{
            type: String,
            required: true
          },
          boxtext1:{
            type: String,
            required: true
          },
          boxtext2:{
            type: String,
            required: true
          },
          boximg2:{
            type: String,
            required: true
          },
          boximg3:{
            type: String,
            required: true
          },
          boxtext3:{
            type: String,
            required: true
          }
})

module.exports = mongoose.model('activites',activityschema,'activites');