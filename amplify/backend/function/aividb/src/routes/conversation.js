const express = require('express');
const router = express.Router();

const conversation_controller = require('../controllers/conversationController');

// router.get('/', function(req, res) {
//     res.json({ message: "conversation" });
// })

router.get('/', conversation_controller.conversation_index);
router.get('/all', conversation_controller.conversation_list);
// router.get('/create', conversation_controller.conversation_create_get);
// router.post('/create', conversation_controller.conversation_create_post);
// router.get('/:id', conversation_controller.conversation_detail);
// router.get('/:id/update', conversation_controller.conversation_update_get);
// router.post('/:id/update', conversation_controller.conversation_update_post);
// router.get('/:id/delete', conversation_controller.conversation_delete_get);
// router.post('/:id/delete', conversation_controller.conversation_delete_post);



router.post('/register', conversation_controller.conversation_register);

module.exports = router;