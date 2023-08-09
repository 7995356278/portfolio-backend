const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hompeschema = new Schema(
    {
        heading:{
            type: String,
            required : true
        },

        subheading: {
            type : String,
            required : true
        },
        image: {
            type : String,
            required : true
        }
    }
)

module.exports = mongoose.model('homep',hompeschema,'homep');