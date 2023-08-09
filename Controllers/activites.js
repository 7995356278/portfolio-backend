const Activites = require('../Models/activites');



exports.activites = (req,res) => {
    Activites.find().then(
     result=>{
         res.status(200).json({
             message: "details fetched",
             activites: result
         })
     }
    ).catch(err => {
     res.status(500).json({
         message: "error in database",
         error: err
     })
    })
}