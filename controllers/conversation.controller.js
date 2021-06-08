const Conversation = require('../models/conversetion.model');
const generalService = require('../services/general.service');

//NOTE This function has not yet been tested.
const getAllConversatios = async (req, res) => {
    try {
        let allConversations = await Conversation.find();
        console.log("Get all conversations successfuly!");
        res.status(200).send(allConversations);
    }
    catch (error) {
        console.log("Can't get conversations with error: " + error);
    }
}
//NOTE This function has not yet been tested.
const getConversationsByUserId = async (req, res) => {
    let userId = req.params.userId;
    try {
        let userConversations = await Conversation.find({ createdUserId: userId });
        console.log("Get user's conversations successfuly!");
        res.status(200).send(userConversations);
    }
    catch (error) {
        console.log("Can't get conversations with error: " + error);
    }
}

const addOneConversation = async (req, res) => {
    let newConversation = new Conversation({
        roomId: req.body.roomId,
        createdUserId: req.body.createdUserId,
        participants: req.body.participants,
        numOfParticipants: req.body.numOfParticipants,
        beginDate: req.body.beginDate,
        closeDate: null,
        duration: 0,
        chat: false,
        wasConversation: false,
    });
    try {
        let addedConversation = await newConversation.save();
        console.log("Save conversation successfuly!");
        res.status(200).send(addedConversation);
    }
    catch (error) {
        console.log("Can't save this conversation with error: " + error);
    }
}

const updateConversationDetails = async (req, res) => {
    let roomId = req.params.roomId;
    let conversationAddition = req.body;
    console.log(conversationAddition);
    let getConversation;
    try {
        let conversation = await Conversation.findOne({ roomId: roomId });
        console.log(conversation);
        if (conversation.closeDate !== null || conversation.closeDate !== undefined)
            getConversation = await Conversation.findOneAndUpdate({ roomId: roomId }, conversationAddition);
        let ansFromAdditionalFunc;
        if (conversationAddition.closeDate != null && conversationAddition.closeDate != undefined) {
            // conversationAddition.closeDate = (Date)(conversationAddition.closeDate);
            getConversation = await Conversation.findOneAndUpdate({ roomId: roomId }, conversationAddition);
            let conver = await Conversation.findOne({ roomId: roomId });
            let duration = generalService.getDuration((Date)(conver.beginDate), (Date)(conver.closeDate));
            getConversation = await Conversation.updateOne(conver, { duration: duration });
            let ansConversation = await Conversation.updateOne(conversation, { beginDate: conversation.beginDate + "", closeDate: conversation.closeDate + "" });
        }
        if (conversationAddition.participants != null || conversationAddition.participants != undefined) {
            let conveParti = await Conversation.findOne({ roomId: roomId });
            ansFromAdditionalFunc = addParticipants(conversationAddition.participants, getConversation);
            if (typeof (ansFromAdditionalFunc) == Error) {
                throw new Error(error);
            }
        }
        console.log("The conversation found and updated successfuly!");
        res.status(200).send(getConversation);
    }
    catch (error) {
        console.log("Can't update this conversation with error: " + error);
    }
}

const addParticipants = async (newParticipants, currentConversation) => {
    try {
        //TODO In the DB there is something wrong with the participants, we have to correct it!!!
        let length = currentConversation.participants.push(...newParticipants);
        currentConversation.numOfParticipants = length;
        let updatedParticipants = await currentConversation.save();
        console.log("The participants added successfuly!");
        return updatedParticipants;
    }
    catch (error) {
        console.log("Can't add these participants with error: " + error);
        return error;
    }
}

//NOTE This function has not yet been tested.
const deleteConversationById = async () => {
    let id = req.params.id;
    try {
        let deleteConversation = await Conversation.findByIdAndDelete(id);
        console.log("Delete conversation successfuly!");
        res.status(200).send(deleteConversation);
    }
    catch (error) {
        console.log("Can't delete conversations with error: " + error);
    }
}

module.exports = {
    getAllConversatios,
    getConversationsByUserId,
    addOneConversation,
    updateConversationDetails,
    deleteConversationById,
};


// const Conversation = require('../models/conversetion.model');
// const generalService = require('../services/general.service');

// //NOTE This function has not yet been tested.
// const getAllConversatios = async (req, res) => {
//     try {
//         let allConversations = await Conversation.find();
//         console.log("Get all conversations successfuly!");
//         res.status(200).send(allConversations);
//     }
//     catch (error) {
//         console.log("Can't get conversations with error: " + error);
//     }
// }
// //NOTE This function has not yet been tested.
// const getConversationsByUserId = async (req, res) => {
//     let userId = req.params.userId;
//     try {
//         let userConversations = await Conversation.find({ createdUserId: userId });
//         console.log("Get user's conversations successfuly!");
//         res.status(200).send(userConversations);
//     }
//     catch (error) {
//         console.log("Can't get conversations with error: " + error);
//     }
// }

// const addOneConversation = async (req, res) => {
//     let newConversation = new Conversation({
//         roomId: req.body.roomId,
//         createdUserId: req.body.createdUserId,
//         participants: req.body.participants,
//         numOfParticipants: req.body.numOfParticipants,
//         beginDate: req.body.beginDate,
//         endDate: req.body.endDate,
//         duration: 0,
//         chat: false,
//         wasConversation: false,
//     });
//     try {
//         let addedConversation = await newConversation.save();
//         console.log("Save conversation successfuly!");
//         res.status(200).send(addedConversation);
//     }
//     catch (error) {
//         console.log("Can't save this conversation with error: " + error);
//     }
// }

// const updateConversationDetails = async (req, res) => {
//     let roomId = req.params.roomId;
//     let conversationAddition = req.body;
//     console.log(conversationAddition);
//     let getConversation;
//     try {
//         let conversation = await Conversation.findOne({ roomId: roomId });
//         console.log(conversation);
//         if (conversation.endDate !== null || conversation.endDate !== undefined)
//             getConversation = await Conversation.findOneAndUpdate({ roomId: roomId }, conversationAddition);
//         let ansFromAdditionalFunc;
//         if (conversationAddition.endDate != null && conversationAddition.endDate != undefined) {
//             let conver = await Conversation.findOne({ roomId: roomId });
//             let duration = generalService.DifferenceInMinutes(conver.beginDate, conver.endDate);
//             getConversation = await Conversation.updateOne(conver, { duration: duration });
//         }
//         if (conversationAddition.participants != null || conversationAddition.participants != undefined) {
//             let conveParti = await Conversation.findOne({ roomId: roomId });
//             ansFromAdditionalFunc = addParticipants(conversationAddition.participants, getConversation);
//             if (typeof (ansFromAdditionalFunc) == Error) {
//                 throw new Error(error);
//             }
//         }
//         console.log("The conversation found and updated successfuly!");
//         res.status(200).send(getConversation);
//     }
//     catch (error) {
//         console.log("Can't update this conversation with error: " + error);
//     }
// }

// const addParticipants = async (newParticipants, currentConversation) => {
//     try {
//         //TODO In the DB there is something wrong with the participants, we have to correct it!!!
//         let length = currentConversation.participants.push(...newParticipants);
//         currentConversation.numOfParticipants = length;
//         let updatedParticipants = await currentConversation.save();
//         console.log("The participants added successfuly!");
//         return updatedParticipants;
//     }
//     catch (error) {
//         console.log("Can't add these participants with error: " + error);
//         return error;
//     }
// }

// //NOTE This function has not yet been tested.
// const deleteConversationById = async () => {
//     let id = req.params.id;
//     try {
//         let deleteConversation = await Conversation.findByIdAndDelete(id);
//         console.log("Delete conversation successfuly!");
//         res.status(200).send(deleteConversation);
//     }
//     catch (error) {
//         console.log("Can't delete conversations with error: " + error);
//     }
// }

// module.exports = {
//     getAllConversatios,
//     getConversationsByUserId,
//     addOneConversation,
//     updateConversationDetails,
//     deleteConversationById,
// };