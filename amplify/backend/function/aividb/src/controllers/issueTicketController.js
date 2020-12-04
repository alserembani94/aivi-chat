const IssueTicket = require('../models/issueTicket');
const async = require('async');
// const User = require('../models/user');
// const Conversation = require('../models/conversation');
// const { body, validationResult } = require('express-validator');

exports.issue_ticket_index = (req, res) => {
    async.parallel({
        issue_ticket_count: (callback) => IssueTicket.countDocuments({}, callback),
    }, (error, data) => {
        // res.render('index_issue_ticket', { title: 'Issue Tickets', error, data });
        res.json({ data, error })
    });
}

// // 4.1 CREATE - Create new issueTicket
// exports.issue_ticket_create_get = (req, res) => {
//     async.parallel({
//         users: callback => User.find(callback),
//         conversations: callback => Conversation.find(callback),
//     }, (error, { users, conversations }) => {
//         if (error) return next(error);
//         res.render('issue_ticket_form', { title: 'Issue a ticket', users, conversations });
//     });
// };

// exports.issue_ticket_create_post = [
//     body('user', 'User required').trim().isLength({ min: 1 }).escape(),
//     body('conversation', 'Conversation required').trim().isLength({ min: 1 }).escape(),
//     body('category', 'Issue category required').trim().isLength({ min: 1 }).escape(),
//     body('description', 'Issue description required').trim().isLength({ min: 1 }).escape(),

//     (req, res, next) => {
//         const errors = validationResult(req);

//         const issue_ticket = new IssueTicket({
//             user: req.body.user,
//             conversation: req.body.conversation,
//             category: req.body.category,
//             description: req.body.description,
//         });

//         if (!errors.isEmpty()) {
//             async.parallel({
//                 users: callback => User.find(callback),
//                 conversations: callback => Conversation.find(callback),
//             }, (error, { users, conversations }) => {
//                 if (error) return next(error);
//                 res.render('issue_ticket_form', { title: 'Issue a ticket', users, conversations, form });
//             });
//             return;
//         }
//         issue_ticket.save(error => {
//             if (error) return next(error);
//             res.redirect('/issue_ticket/all');
//         })
//     }
// ];

// 4.2 READ - Display all issueTickets
exports.issue_ticket_list = (req, res, next) => {
    IssueTicket
    .find({})
    .populate('user')
    .populate('conversation')
    .exec((err, issue_ticket_list) => {
        if (err) return next(err);
        // res.render('issue_ticket_list', { title: 'Issue Ticket List', issue_ticket_list });
        res.send(issue_ticket_list)
    });
};

// exports.issue_ticket_detail = (req, res, next) => {
//     async.parallel({
//         issue_ticket: (callback) => {
//             IssueTicket.findById(req.params.id)
//                 .populate('user')
//                 .populate('conversation')
//                 .exec(callback);
//         }
//     }, (err, { issue_ticket }) => {
//         if (err) return next(err);
//         if (issue_ticket === null)  {
//             const err = new Error('Issue ticket not found');
//             err.status = 404;
//             return next(err);
//         }
//         res.render('issue_ticket_detail', { title: issue_ticket.category, issue_ticket });
//     });
// };

// // 4.3 UPDATE - Assign issueTicket
// exports.issue_ticket_assign_get = (req, res) => {
//     res.send('NOT IMPLEMENTED: issueTicket assign GET');
// };

// exports.issue_ticket_assign_post = (req, res) => {
//     res.send('NOT IMPLEMENTED: issueTicket assign POST');
// };

// // 4.4 UPDATE - Resolve issueTicket
// exports.issue_ticket_resolve_get = (req, res) => {
//     res.send('NOT IMPLEMENTED: issueTicket resolve GET');
// };

// exports.issue_ticket_resolve_post = (req, res) => {
//     res.send('NOT IMPLEMENTED: issueTicket resolve POST');
// };

// // 4.5 DELETE - Delete issueTicket
// exports.issue_ticket_delete_get = (req, res) => {
//     async.parallel({
//         issue_ticket: callback => IssueTicket.findById(req.params.id).exec(callback),
//     }, (error, { issue_ticket }) => {
//         if (error) return next(error);
//         if (!issue_ticket) res.redirect('/issue_ticket/all');
//         res.render('issue_ticket_delete', { title: 'Delete Issue Ticket', issue_ticket });
//     });
// };

// exports.issue_ticket_delete_post = (req, res) => {
//     async.parallel({
//         issue_ticket: callback => IssueTicket.findById(req.body.id).exec(callback),
//     }, (error) => {
//         if (error) return next(error);
//         IssueTicket.findByIdAndRemove(req.body.id, deleteIssueTicket = (error) => {
//             if (error) return next(error);
//             res.redirect('/issue_ticket/all');
//         })
//     });
// };
