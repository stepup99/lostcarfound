const kue = require('kue');
queue = kue.createQueue();
const ArrReassign = [];

const axios = require('axios');
const tryFunc = async () => {
    await axios.get('http://localhost:5000/api/police')
        .then(function (response) {
            // console.log(response.data.length)
            response.data.map(item => {

                if (item.status == 'Resolved') {
                    queue.process('fir', function (job, done) {
                        ArrReassign.push(job.data);
                        if (ArrReassign.length > 0) {
                            axios.put(`http://localhost:5000/api/police/${item._id}`, job.data);
                        }
                    });
                } else {
                    console.log("none of the police are free to take task")
                }
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
            console.log("finally done")
        });


    console.log("inside worker.js")
}


tryFunc();





