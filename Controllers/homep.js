const Homep = require('../Models/homep');


exports.homepage = (req,res) => {
    Homep.find().then(
        result =>{
            res.status(200).json({
                message: "details fetched",
                homep : result
            });
        }
    ).catch(err => {
        res.status(500).json({
            message: "error in database",
            error : err
        })
    })
}


