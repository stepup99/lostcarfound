const express = require('express');

const router = express.Router();



const carowner = require('./schema/schema.js').carowner;
try {
    router.get('/', (req, res) => {
        res.json("hye ter");
        // Carowner.find().then(item => {
        //     res.json(item);
        // });
    });

    router.post('/', (req, res) => {
        console.log(req.body);
        const newCarOwner = new carowner({
            name: req.body.name,
            description: req.body.description,
            lostplace: req.body.lostplace,
            status: req.body.status
        });

        newCarOwner.save().then(item => {
            res.json(item);
        });
    });
} catch (error) {
    console.log(error);
}



module.exports = router;