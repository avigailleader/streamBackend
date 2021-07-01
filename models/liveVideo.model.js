const mongoose = require('mongoose');

const liveVideoSchema = mongoose.Schema({
    videoLiveName: {
        type: String,
    },
    date: {
        type: Date,
    },
    length: {
        type: String,
    },
    url: {
        type: String,
        require: true
    },
    users: [
        {
            type: String,
        }
    ]
})

module.exports = mongoose.model('liveVideo', liveVideoSchema)