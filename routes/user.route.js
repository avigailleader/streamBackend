const router = require('express').Router();
const user = require('../controllers/user.controller');

router.get('/getOneUser/:id', user.getOneUser);
router.get('/getUserByUserName/:userName', user.getUserByUserName);
router.post('/addOneUser', user.addOneUser);
router.patch('/updateUsersContacts/:id', user.updateUsersContacts);

module.exports = router;