const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectschema = new Schema(
     {
        projecthead:{
            type: String,
            required: true
        },
        projectdata:{
            type: String,
            required: true
        },
        project1head:{
            type: String,
            required: true
        },
        project1decp:{
            type: String,
            required: true
        },
        project1img:{
            type: String,
            required: true
        },
        project1link:{
            type: String,
            required: true
        },
        project1decp:{
            type: String,
            required: true
        },
        project2head:{
            type: String,
            required: true
        },
        project2decp:{
            type: String,
            required: true
        },
        project2img:{
            type: String,
            required: true
        }
     }
)

module.exports = mongoose.model('project',projectschema,'project');