const express = require('express');
const router = express.Router();
const police = require('./schema/schema.js').police;

try {
    router.get('/', (req, res) => {
        // console.log("this is police get api")
        // res.send("data is consoele")
        police.find().then(item => {
            res.json(item);
        });
    });

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const { _id, name, lostplace } = req.body;
        carownerinfo = {
            id: _id,
            caronwername: name,
            lostplace: lostplace
        }
        police.findByIdAndUpdate({ _id: id }, { $set: { carownerinfo, status: "Inprogress" } }, { new: true }).then((item) => {
            res.json(item);
        });
    });


    router.put('/resolve/:id', (req, res) => {
        const id = req.params.id;
        police.findByIdAndUpdate({ _id: id }, { $set: { status: "Resolved" } }, { new: true }).then((item) => {
            res.json(item);
        });
    });

    router.post('/', (req, res) => {
        const Police = new police({
            name: req.body.name,
            status: req.body.status
        });

        Police.save().then(item => {
            res.json(item);
        });
    });
} catch (error) {
    console.log(error);
}



module.exports = router;