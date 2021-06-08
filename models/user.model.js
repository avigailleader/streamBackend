const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    // firebaseId: {
    //     type: String,
    //     require: true,
    // },
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    imgProfile: {
        type: String,
    },
    uid: {
        type: String,
    },
    displayName: {
        type: String,
    },
    // password: {
    //     type: String,
    //     require: false,
    // },
    // picture: {
    //     type: String,
    //     require: false,
    // },
    // googleProfile: {
    //     type: Object,
    //     require: false,
    // },
    // token: {
    //     type: String,
    //     require: true,
    // },
    // additionalContacts: [
    //     { type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }
    // ],
})

module.exports = mongoose.model('User', userSchema)
