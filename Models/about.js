const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aboutschema = new Schema({
    heading: {
        type: String,
        required : true
    },
     maintheme: {
        type: String,
        required : true
    },
    eduhead: {
        type: String,
        required : true
    },
    Btech: {
        type: String,
        required : true
    },
    unimg: {
        type: String,
        required : true
    },
    duration: {
        type: String,
        required : true
    },
    grade: {
        type: String,
        required : true
    },
    certificates: {
        type: String,
        required : true
    },
    courser: {
        type: String,
        required : true
    },
    coursetell: {
        type: String,
        required : true
    },
    coursecert: {
        type: String,
        required : true
    },
    skillhead: {
        type: String,
        required : true
    },
    skillset1: {
        type: String,
        required : true
    },
    skillset2: {
        type: String,
        required : true
    },
    skillset3: {
        type: String,
        required : true
    },
    skillset4: {
        type: String,
        required : true
    },
    skillset5: {
        type: String,
        required : true
    },
    skillset6: {
        type: String,
        required : true
    },

    skillset7: {
        type: String,
        required : true
    },
    skillset8: {
        type: String,
        required : true
    },
    skillset9: {
        type: String,
        required : true
    },

})


module.exports = mongoose.model('about',aboutschema,'about');

