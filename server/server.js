const express = require('express');
const redis = require('redis');
const app = express();
const client = redis.createClient(6379, '127.0.0.1');

client.on('connect', function () {
    console.log("connected")
});

const PORT = 5000;





app.listen(PORT, (req, res) => {
    console.log(`it is listening @ ${PORT}`);
});