const Project = require('../Models/project');

exports.project = (req,res) => {
    Project.find().then(
        result => {
            res.status(200).json({
                message: "project details fetched",
                project: result
            })

        }
    ).catch(err =>{
        res.status(500).json({
            message: "error in database",
            error: err
        })
    })
}