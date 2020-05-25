const express = require('express');
const router = express.Router();
let kue = require(`kue`);
let queue = kue.createQueue();



const carowner = require('./schema/schema.js').carowner;
try {


    router.get('/', async (req, res) => {
        carowner.find().then(item => {
            res.json(item);
        });
    });




    router.get('/:mobile', (req, res) => {

        let mobile = req.params.mobile;
        // console.log("mobile data------------");
        // console.log(mobile);
        // res.json(mobile);
        carowner.find({ mobile }, function (err, data) {
            if (err) {
                res.send(err)
                return;
            }
            res.send(data);
        })
    });

    router.put('/resolve/:id', (req, res) => {
        const id = req.params.id;
        carowner.findByIdAndUpdate({ _id: id }, { $set: { status: "Resolved" } }, { new: true }).then((item) => {
            res.json(item);
        });
    });

    router.post('/', (req, res) => {
        const newCarOwner = new carowner({
            name: req.body.name,
            description: req.body.description,
            lostplace: req.body.lostplace,
            status: "pending",
            mobile: req.body.mobile
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