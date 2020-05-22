let kue = require(`kue`);

let queue = kue.createQueue();

//event handler. Called when job is saved to the Redis.


let job = queue.create(`fir`, {
    carstolen: `true`,
    name: "martand"
}).save(function (err) {
    if (!err) console.log(`inside error fn ${job.id}`);
});


job.on(`enqueue`, function () {
    console.log(`Job Submitted in the Queue. with job id is ${job.id}`);
    console.log('object is ');
    console.log(job.type);
    console.log(job.data);
    process.exit(0);
});


