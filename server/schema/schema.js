const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ownerschema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    lostplace: {
        type: String
    },
    status: {
        type: String
    }
})

const Policeschema = new Schema({
    name: {
        type: String
    },
    status: {
        type: String
    },
    carownerinfo: {
        id: String,
        caronwername: String,
        lostplace: String
    }
});


module.exports = {
    carowner: mongoose.model('carowner', Ownerschema),
    police: mongoose.model('police', Policeschema)
}