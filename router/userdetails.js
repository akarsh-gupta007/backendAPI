const express = require("express")
const projectmodel = require("../models/projectmodel.js")
const router = express.Router();

router.get('/getalldetails', async (req, res) => {
    try {
        const aliens = await projectmodel.find().sort({ "ranking": 1 });
        res.json(aliens)
    }
    catch (err) {
        console.log(err)
    }
})
router.post('/api', async (req, res) => {
    const { name, tech, email, ranking } = req.body;
    const newdata = new projectmodel(req.body)
    console.log(name, tech, email, ranking)
    const exituser = await projectmodel.findOne({ email:email }).exec();    
    try {
        if (exituser) {
            res.send({msg:"the user exits"})
            console.log("user exits")
        }
        else {
            const a1 = await newdata.save()
            res.json(a1)
            res.send({msg:"data is added successfully"})
            console.log("data is added")
        }
    }
    catch (err) {
        console.log(err)
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const updatedata = await projectmodel.findByIdAndUpdate(req.params.id, req.body);
        const a1 = await updatedata.save()
        res.json(a1)
    }
    catch (err) {
        console.log(err)
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedata = await projectmodel.findByIdAndRemove(req.params.id);
        const a1 = await deletedata.save({});
        res.json(a1)
        console.log("deleted")
    }
    catch (err) {
        console.log(err)
    }
})
router.delete('/deletemany', async (req, res) => {
    try {
        const a1 = await projectmodel.deleteMany({});
        res.json(a1)
        console.log("deleted")
    }
    catch (err) {
        console.log(err)
    }
})



module.exports = router