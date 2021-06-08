const router = require('express').Router();
const conversation = require('../controllers/conversation.controller');

router.get('/getAllConversatios', conversation.getAllConversatios);
router.get('/getConversationsByUserId/:userId', conversation.getConversationsByUserId);
router.post('/addOneConversation', conversation.addOneConversation);
router.patch('/updateConversationDetails/:roomId', conversation.updateConversationDetails);
router.delete('/deleteConversationById/:id', conversation.deleteConversationById);

module.exports = router;