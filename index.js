const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");
const request = require("request");
const cookieParser = require('cookie-parser')

const { socketServer } = require('./webSocket');
socketServer(http);
const { connectDB } = require('./db');
connectDB();
const userRouter = require('./routes/user.route');
const conversationRouter = require('./routes/conversation.route');
const recordRouter = require('./routes/record.route');
const contactRouter = require('./routes/contact.route');

const User = require('./models/user.model');
const { checkPermission, isPermission } = require('./controllers/login.controller');

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

app.get("/", (req, res, next) => {
  if (!req.url.includes("connection"))
    res.redirect("https://accounts.codes/meet/login");
})

app.get('/:username', (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"))
});

// app.use('/:username', viewsRouter)

// app.get('/conversation/:username', (req, res) => {
//   res.sendFile(path.join(__dirname, "./build/index.html"))
// })

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

http.listen(3007, function () {
  console.log('listening on *:3007');
});

// NOTE 08-04-21
//server without login of accounts

// const express = require('express');
// const app = express();
// const http = require('http').Server(app);
// const bodyParser = require('body-parser');
// const cors = require("cors");
// const path = require("path");

// const { socketServer } = require('./webSocket');
// socketServer(http);
// const { connectDB } = require('./db');
// connectDB();
// const userRouter = require('./routes/user.route');
// const conversationRouter = require('./routes/conversation.route');
// const recordRouter = require('./routes/record.route');
// const contactRouter = require('./routes/contact.route');
// const viewsRouter = require('./routes/views')

// // app.use(express.static('public'));
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, './build')));

// app.use('/api/user', userRouter);
// app.use('/api/conversation', conversationRouter);
// app.use('/api/record', recordRouter);
// app.use('/api/contact', contactRouter);
// // app.use('/connection/room', viewsRouter);
// app.use('/', viewsRouter)


// module.exports = {
//   app,
//   http,
// }

// // const { http } = require('./server/app');

// http.listen(3007, function () {
//   console.log('listening on *:3007');
// });



// // // const http = require('http');
// // // http.createServer(function (req, res) {
// // //   res.writeHead(200, { 'Content-Type': 'text/html' });
// // //   res.end('<h1>Hello World!</h1>');
// // // }).listen(3007);
