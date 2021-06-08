const request = require('request');
const app = require('../index.js');
const User = require('../models/user.model.js');

const checkPermission = async (req, res, next) => {
    console.log("from check permission")
    const host = req.get('host');
    const isLocal = (req.query.isLocal == 'true');
    console.log("newIsLocal", isLocal);
    if (isLocal)
        return next();
    console.log("in checkPermission", req.originalUrl.split("/"));
    let userName = req.originalUrl.split("/")[1];
    console.log("🚀 ~ file: login.controller.js ~ line 13 ~ checkPermission ~ userName", userName)
    let apiFlag = false;
    let urlRoute = 'https://meet.dev.leader.codes';
    let redirectUrl = host + "/admin";
    if (userName == "api") {
        userName = req.originalUrl.split("/")[2];
        apiFlag = true;
    }
    if (!apiFlag) urlRoute = req.originalUrl.split("/")[3]
    if (!userName) {
        console.log("no uid");
        return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 })
    }
    else {
        const jwt = req.cookies && req.cookies.devJwt ? req.cookies.devJwt : req.headers['authorization'] ? req.headers['authorization'] : null
        const cookie = request.cookie(`jwt=${jwt}`)
        const options = {
            method: "GET",
            url: `https://accounts.codes/isPermission/${userName}`,
            headers: { Cookie: cookie }
        };
        request(options, (error, response, body) => {
            console.log("response.statusCode------------", response.statusCode)
            console.log("body", typeof (body), body)
            if (error || response.statusCode != 200) {
                return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 })
            }
            else {
                console.log("userName", userName)
                if (body == 'true') {
                    console.log("no error!!!!!!!");
                    return next();
                }
                return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 })
            }
        });
    }
};

const isPermission = async (req, res) => {
    let currentUser = await User.findOne({ username: req.params.username })
    console.log("in index.js");
    console.log("🚀 ~ file: index.js ~ line 56 ~ app.use ~ req.params.username", req.params.username)
    if (!currentUser) {
        let newUser = new User();
        const jwt = req.cookies.devJwt ? req.cookies.devJwt : req.headers['authorization'] ? req.headers['authorization'] : null
        const cookie = request.cookie(`jwt=${jwt}`)
        const options = {
            method: "GET",
            url: `https://accounts.codes/api/${req.params.username}`,
            headers: { Cookie: cookie }
        };
        request(options, async (error, response, body) => {
            console.log("response.statusCode--", response.statusCode)
            if (error || response.statusCode != 200) {
                return res.status(401);
                // return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 });
            }
            else {
                console.log("username", req.params.username);
                newUser.username = req.params.username;
                newUser.imgProfile = JSON.parse(body).user.imgProfile;
                newUser.uid = JSON.parse(body).user.uid;
                newUser.email = JSON.parse(body).user.email
                if (JSON.parse(body).user.displayName !== undefined) {
                    newUser.displayName = JSON.parse(body).user.displayName;
                }
                await newUser.save();
            }
        });
    }
    res.status(200).send();
}

module.exports = {
    checkPermission,
    isPermission,
};
//TODO All function that have to be protected pass login Middelware checkPermission
