const express = require('express');
const redis = require('redis');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const client = redis.createClient(6379, '127.0.0.1');
const mongoose = require('mongoose');
const dbInfo = require("./config");
const carowner = require('./carowners');
const police = require('./polices');

const schedule = require('node-schedule');
const shelljs = require('shelljs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors());
// npm run watch

client.on('connect', function () {
    console.log("redis connected")
});

const PORT = 5000;

const func = async () => {
    await mongoose.connect(dbInfo.dburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('Database Connected'))
        .catch(err => console.log(err));

    mongoose.connection.on('error', function (err) {
        console.log("Mongoose default connection has occured " + err + " error");
    });

    app.use('/api/carowner', carowner);
    app.use('/api/police', police);


    app.listen(PORT, (req, res) => {
        console.log(`it is listening @ ${PORT}`);
    });

    schedule.scheduleJob('*/30 * * * * *', async function () {
        console.log("the time is --------------- >>>>>>>>   " + new Date());
        if (shelljs.exec("node ./server/worker.js", { async: true }).code !== 0) {
            console.log("something went wrong");

        }
    })
}

func();
