const { createConversation, joinConversation, joinAdmin, setStream } = require('../services/create-conversation.service');
const { sendMessage, sendMessageToAll } = require('../services/create-chat.service');
const { sendJoinEmail } = require('../services/email.service');
const ss = require('socket.io-stream');

const onWebSocketConnection = (socket, io) => {
    socket.on('send-message', (data) => {
        console.log('data from send message' + data);
        sendMessage(socket, data, io)
    });
    socket.on('send-message-to-all', (data) => {
        // console.log('from send-message-to-all:' + data.messageToShare.data);
        sendMessageToAll(socket, data, io)
    });

    socket.on('create', (data) => {


        createConversation(socket, data, io);
    });
    socket.on('selectParticipate', (data) => {
        sendJoinEmail(data.emailAddress, data.roomId, data.currentUser.email);
    });

    socket.on('join', (data) => {
        joinConversation(socket, data, io);
    });

    socket.on('ready', function (data) {
        socket.broadcast.to(data).emit('ready', socket.id);
    });

    socket.on('candidate', function (data) {
        socket.broadcast.to(data.room).emit('candidate', data);
    });

    socket.on('offer', function (data) {
        socket.broadcast.to(data.room).emit('offer', data.sdp);
    });

    socket.on('answer', function (data) {
        socket.broadcast.to(data.room).emit('answer', data.sdp);
    });

    socket.on('toggleAudio', function (data) {
        socket.broadcast.to(data.room).emit('toggleAudio', data.message);
    });

    socket.on('radio', function (data) {
        socket.broadcast.emit('voice', data);
    });
    socket.on('initSend', function (data) {
        console.log('INIT SEND by ' + socket.id + ' for ' + data)
        peers[data].emit('initSend', socket.id)
    })
    ss(socket).on('setStream', function (stream) {
        setStream(stream);

    });
}

module.exports = {
    onWebSocketConnection,
}