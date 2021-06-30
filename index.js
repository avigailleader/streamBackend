const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");
const request = require("request");
const cookieParser = require('cookie-parser')
const dotenv = require("dotenv");
const { socketServer } = require('./webSocket');
socketServer(http);
const { connectDB } = require('./db');
connectDB();
const userRouter = require('./routes/user.route');
const conversationRouter = require('./routes/conversation.route');
const recordRouter = require('./routes/record.route');
const contactRouter = require('./routes/contact.route');
const viewsRouter = require('./routes/views');

const User = require('./models/user.model');
const { checkPermission, isPermission } = require('./controllers/login.controller');
const webrtc = require("wrtc");

dotenv.config();
app.use(cookieParser());
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './build')));

app.use('/api/user', userRouter);
app.use('/api/conversation', conversationRouter);
app.use('/api/record', recordRouter);
app.use('/api/contact', contactRouter);

// app.use('/', (req, res) => {
//   console.log("🚀 ~ file: index.js ~ line 33 ~ app.get ~ req")
//   // res.redirect("https://accounts.codes/meet/login");
// });
app.post("/consumer", async ({ body }, res) => {
  console.log("aaaaaaaaaaaaaaa");
  const peer = new webrtc.RTCPeerConnection({
    iceServers: [
      {
        urls: "stun:stun.stunprotocol.org"
      }
    ]
  });
  console.log(body);
  const desc = new webrtc.RTCSessionDescription(body.sdp);
  await peer.setRemoteDescription(desc);
  senderStream.getTracks().forEach(track => peer.addTrack(track, senderStream));
  const answer = await peer.createAnswer();
  await peer.setLocalDescription(answer);
  const payload = {
    sdp: peer.localDescription
  }

  res.json(payload);
});

app.post('/broadcast', async ({ body }, res) => {
  console.log("bbbbbbbbbbbbbbbbbbbbb");
  console.log(body);
  const peer = new webrtc.RTCPeerConnection({
    iceServers: [
      {
        urls: "stun:stun.stunprotocol.org"
      }
    ]
  });
  peer.ontrack = (e) => handleTrackEvent(e, peer);
  const desc = new webrtc.RTCSessionDescription(body.sdp);
  await peer.setRemoteDescription(desc);
  const answer = await peer.createAnswer();
  await peer.setLocalDescription(answer);
  const payload = {
    sdp: peer.localDescription
  }

  res.json(payload);
});

function handleTrackEvent(e, peer) {
  debugger
  senderStream = e.streams[0];
};


app.use('/*', viewsRouter)


app.use('/:username/isPermission', checkPermission, async (req, res) => {
  isPermission(req, res);
  res.status(200).send();
});

module.exports = {
  app,
  http,
}

// IT'S ME.. ROI... YOU CAN DELETE THIS IF YOU WANT, BUT YOU MUST HAVE A LISTEMER...
// app.listen(process
//   .env.PORT, (err) => {
//     console.log("server is up!!!!!");
//   });

http.listen(process.env.PORT, function () {
  console.log('listening on :', process.env.PORT);
});

