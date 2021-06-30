const mongoose = require('mongoose');

const liveVideoSchema = mongoose.Schema({
    videoLiveName: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    length: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('liveVideo', liveVideoSchema)