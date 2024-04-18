const router = require('express').Router();
let Activity = require('../models/dbModel.js');

router.route("/health-check").get((req,res)=> {
    console.log(req.body)
    res.json({
        ok:true,
    })

})

router.route("/add").post(async (req,res) => {
    console.log(req.body)
    const activity = req.body.activity;
    const dueDate = req.body.dueDate;

    const newActivity = new Activity.activities({
        activity,
        dueDate
    })

    try {
        await newActivity.save();
        res.json(`New Activity added to DB ${newActivity._id}`)
    } catch(err) {
        res.json("Failed to save the new activity")
    }
    

})

router.route("/getact").get(async (req,res) => {
    try {
        
        const activityList = await Activity.activities.find()
        res.json(activityList)
        
    } catch(err) {
        res.json(`Failed to retrieve activity list`)
    }

})

router.route("/getactbyid/:id").get(async (req,res) => {
    try {
        const id = req.params.id;
        const activityList = await Activity.activities.findById(id)
        res.json(activityList)
        
    } catch(err) {
        res.json(`Failed to retrieve activity list`)
    }

})

router.route("/delete/:id").delete(async(req,res) => {
    const id = req.params.id;
    const activity = req.body.activity;

    try {
        await Activity.activities.findByIdAndDelete(id)
        res.json(`${id} Was deleted from database`)
    } catch (err) {
        console.log(`Failed to delete ${id} from database`)
    }


});

router.route("/updateData/:id").post(async (req,res) => {
    try{
        const id = req.params.id
        const updateData = req.body
        console.log(id)
        const updatedActivity = await Activity.activities.findByIdAndUpdate(id, updateData, {
            new: true, // Return the modified document rather than the original
            runValidators: true // Validates the update operation against the schema
        });
        console.log(updatedActivity)
        res.json(`ID successfully updated`)
    } catch(err)  {
        console.log(`Failed to update Data: ${err}`)
    }
})
module.exports = router;
