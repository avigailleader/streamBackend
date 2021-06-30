const { sendJoinEmail } = require('./email.service');
var roomdata = require('roomdata');

const createConversation = (socket, data, io) => {
    const { room } = data;
    console.log(room);
    socket.join(room);
    console.log("socket.id", socket.id);
    socket.emit('created', room);
    var room1 = io.sockets.adapter.rooms.get(room)
    room1.admin = socket.id
}

const setStream = (stream) => {
    console.log("on set stream!! ");
    console.log(stream)
}
const joinConversation = (socket, data, io) => {
    console.log(socket.id);
    console.log("hello", socket.conn.id);
    const { room } = data;
    console.log(room);
    console.log('join to room ', room);
    if (io.sockets.adapter.rooms.has(room)) {
        console.log("exist room!!")
        socket.join(room);
        socket.emit('joined', { room });
        console.log("num of client on the conversation " + io.sockets.adapter.rooms.get(room).size);

    }
    else {
        console.log("not exist room!")
        socket.emit('not exist room', { room });
    }
}
module.exports = {
    createConversation,
    joinConversation,
    setStream,

}
