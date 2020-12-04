const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.get('/', user_controller.user_index);
router.get('/all', user_controller.user_list);
// router.get('/create', user_controller.user_create_get);
// router.post('/create', user_controller.user_create_post);
// router.get('/:id', user_controller.user_detail);
// router.get('/:id/update', user_controller.user_update_get);
// router.post('/:id/update', user_controller.user_update_post);
// router.get('/:id/delete', user_controller.user_delete_get);
// router.post('/:id/delete', user_controller.user_delete_post);

module.exports = router;