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

module.exports = {
    carowner: mongoose.model('carowner', Ownerschema)
}