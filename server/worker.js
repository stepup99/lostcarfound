const kue = require('kue');
queue = kue.createQueue();
const ArrReassign = [];
queue.process('fir', function (job, done) {
    // console.log(job.type);
    // console.log(job.data);
    ArrReassign.push(job.data)
    //hye there
    console.log(ArrReassign);
    console.log(ArrReassign.length);
    //return done(new Error('unexpcted error'));

});




