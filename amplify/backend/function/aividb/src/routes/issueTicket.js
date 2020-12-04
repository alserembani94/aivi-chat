const express = require('express');
const router = express.Router();

const issue_ticket_controller = require('../controllers/issueTicketController');

router.get('/', issue_ticket_controller.issue_ticket_index);
router.get('/all', issue_ticket_controller.issue_ticket_list);
// router.get('/create', issue_ticket_controller.issue_ticket_create_get);
// router.post('/create', issue_ticket_controller.issue_ticket_create_post);
// router.get('/:id', issue_ticket_controller.issue_ticket_detail);
// router.get('/:id/assign', issue_ticket_controller.issue_ticket_assign_get);
// router.post('/:id/assign', issue_ticket_controller.issue_ticket_assign_post);
// router.get('/:id/resolve', issue_ticket_controller.issue_ticket_resolve_get);
// router.post('/:id/resolve', issue_ticket_controller.issue_ticket_resolve_post);
// router.get('/:id/delete', issue_ticket_controller.issue_ticket_delete_get);
// router.post('/:id/delete', issue_ticket_controller.issue_ticket_delete_post);

module.exports = router;