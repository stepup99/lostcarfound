const express = require('express');
const redis = require('redis');
const cors = require('cors');
const bodyParser = require('body-parser');
// const socket = require('socket.io');
// const global = require('./global.js');
const app = express();
const client = redis.createClient(6379, '127.0.0.1');
const mongoose = require('mongoose');
const dbInfo = require("./config");
const carowner = require('./carowners');
const police = require('./polices');
const contants_ip = require('../config_ip/config_const');

const schedule = require('node-schedule');
const shelljs = require('shelljs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors());
// npm run watch

app.get('/', (req, res) => {
    req.send('hye it is running')
})

client.on('connect', function () {
    console.log("redis connected")
});

const PORT = process.env.PORT || 5000;

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


    let server = app.listen(PORT, (req, res) => {
        console.log(`it is listening @ ${PORT} and ip is ${contants_ip.APP_PRIVATE_IP_ADDRESS}`);
    });

    // let io = socket(server)

    // Initiate as object


    // global.io = require('socket.io').listen(server);

    // io.on('connection', function (socket) {
    //     console.log("made socket connection");
    // })



    schedule.scheduleJob('*/30 * * * * *', async function () {
        console.log("the time is --------------- >>>>>>>>   " + new Date());
        if (shelljs.exec("node ./server/worker.js", { async: true }).code !== 0) {
            console.log("something went wrong");

        }
    })
}

func();


