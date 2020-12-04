const express = require('express');
const router = express.Router();

const form_controller = require('../controllers/formController');

router.get('/', form_controller.form_index);
router.get('/all', form_controller.form_list);
// router.get('/create', form_controller.form_create_get);
router.post('/create', form_controller.form_create_post);
// router.get('/:id', form_controller.form_detail);
// router.get('/:id/update', form_controller.form_update_get);
// router.post('/:id/update', form_controller.form_update_post);
// router.get('/:id/delete', form_controller.form_delete_get);
// router.post('/:id/delete', form_controller.form_delete_post);

module.exports = router;