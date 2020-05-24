const express = require('express');
const router = express.Router();
let kue = require(`kue`);
let queue = kue.createQueue();



const carowner = require('./schema/schema.js').carowner;
try {
    router.get('/', (req, res) => {
        res.json("hye ter");
        // Carowner.find().then(item => {
        //     res.json(item);
        // });
    });

    router.post('/', (req, res) => {
        const newCarOwner = new carowner({
            name: req.body.name,
            description: req.body.description,
            lostplace: req.body.lostplace,
            status: req.body.status
        });

        newCarOwner.save().then(item => {
            res.json(item);
            const { _id, name, lostplace } = item;
            let job = queue.create(`fir`, {
                _id,
                name,
                lostplace
            }).save(function (err) {
                if (!err) console.log(`inside error fn ${job.id}`);
            });


            job.on(`enqueue`, function () {
                console.log(`Job Submitted in the Queue. with job id is ${job.id}`);
                console.log('object is ');
                console.log(job.type);
                console.log(job.data);
            });



        });
    });
} catch (error) {
    console.log(error);
}



module.exports = router;