const Conversation = require('../models/conversation');
// const User = require('../models/user');
// const Form = require('../models/form');
// const IssueTicket = require('../models/issueTicket');
const async = require('async');
const { body, validationResult } = require('express-validator');

exports.conversation_index = function (req, res) {
    async.parallel({
        conversation_count: function (callback) { Conversation.countDocuments({}, callback) },
    }, function (error, data) {
        res.json({ error, data });
    });
}

exports.conversation_list = (req, res, next) => {
    Conversation.find({})
        .populate('user')
        .exec((error, conversation_list) => {
            if(error) return next(error);
            // res.render('conversation_list', { title: 'Conversation List', conversation_list });
            res.send(conversation_list);
        });
};

// exports.conversation_detail = (req, res, next) => {
//     async.parallel({
//         conversation: (callback) => {
//             Conversation.findById(req.params.id)
//                 .populate('user')
//                 .exec(callback);
//         }
//     }, (err, {conversation}) => {
//         if (err) return next(err);
//         if (conversation === null)  {
//             const err = new Error('Conversation not found');
//             err.status = 404;
//             return next(err);
//         }
//         res.render('conversation_detail', { title: conversation.user.username, conversation })
//     });
// };

// exports.conversation_create_get = (req, res, next) => {
//     async.parallel({
//         users: callback => User.find(callback),
//     }, (error, { users }) => {
//         if (error) return next(error);
//         res.render('conversation_form', { title: 'Initiate Conversation', users });
//     });
// }

// exports.conversation_create_post = [
//     body('user', 'User required').trim().isLength({ min: 1 }).escape(),
//     body('lexSessionID', 'Lex Session ID required').trim().isLength({ min: 1 }).escape(),

//     (req, res, next) => {
//         // Extract validation errors, if any
//         const errors = validationResult(req);

//         // Create new conversation object, with sanitized data
//         const conversation = new Conversation({
//             user: req.body.user,
//             lexSessionID: req.body.lexSessionID,
//             conversation_list: req.body.conversation_list || [
//                 {
//                     user: req.body.user,
//                     message: 'Hello',
//                 },
//             ],
//         });

//         // If there is error, send back conversation
//         if (!errors.isEmpty()) {
//             // res.render('conversation_form', { title: 'Initiate Conversation', conversation, errors: errors.array() })
//             async.parallel({
//                 users: callback => User.find(callback),
//             }, (error, { users }) => {
//                 if (error) return next(error);
//                 res.render('conversation_form', { title: 'Initiate Conversation', conversation, users, errors: errors.array() });
//             });
//             return;
//         }
//         conversation.save(error => {
//             if (error) return next(error);
//             res.redirect('/conversation/all');
//         })
//     },
// ];

// // exports.conversation_create_post = (req, res) => {
// //     res.send('Anything');
// // };

// exports.conversation_update_get = (req, res) => {
//     async.parallel({
//         conversation: callback => Conversation.findById(req.params.id).exec(callback),
//         users: callback => User.find(callback),
//     }, (err, { conversation, users }) => {
//         if (err) return next(err);
//         if (!conversation) {
//             const err = new Error('Conversation not found');
//             err.status = 404;
//             return next(err);
//         }
//         // Need something here
//         res.render('conversation_form', { title: 'Update conversation', conversation, users });
//     });
// };

// exports.conversation_update_post = [
//     body('user', 'User required').trim().isLength({ min: 1 }).escape(),
//     body('lexSessionID', 'Lex Session ID required').trim().isLength({ min: 1 }).escape(),

//     (req, res, next) => {
//         // Extract validation errors, if any
//         const errors = validationResult(req);

//         // Create new conversation object, with sanitized data
//         const conversation = new Conversation({
//             _id: req.params.id,
//             user: req.body.user,
//             lexSessionID: req.body.lexSessionID,
//             conversation_list: [
//                 {
//                     user: req.body.user,
//                     message: 'Hello',
//                 },
//             ],
//         });
//         // res.send(conversation);

//         // If there is error, send back conversation
//         if (!errors.isEmpty()) {
//             async.parallel({
//                 users: callback => User.find(callback),
//             }, (error, { users }) => {
//                 if (error) return next(error);
//                 res.render('conversation_form', { title: 'Initiate Conversation', conversation, users, errors: errors.array() });
//             });
//             return;
//         }
//         Conversation.findByIdAndUpdate(req.params.id, conversation, {}, (error, found_conversation) => {
//             if (error) return next(error);
//             res.redirect(found_conversation.url);
//         });
//     },
// ];

// exports.conversation_delete_get = (req, res, next) => {
//     async.parallel({
//         conversation: callback => Conversation.findById(req.params.id).exec(callback),
//         forms: callback => Form.find({ conversation: req.params.id }).exec(callback),
//         issue_tickets: callback => IssueTicket.find({ conversation: req.params.id }).exec(callback),
//     }, (err, { conversation, forms, issue_tickets }) => {
//         if (err) return next(err);
//         if (!conversation) res.redirect('/conversation');
//         res.render('conversation_delete', { title: 'Delete Conversation', conversation, forms, issue_tickets });
//     });
// };

// exports.conversation_delete_post = (req, res, next) => {
//     async.parallel({
//         conversation: callback => Conversation.findById(req.body.id).exec(callback),
//         forms: callback => Form.find({ conversation: req.body.id }).exec(callback),
//         issue_tickets: callback => IssueTicket.find({ conversation: req.body.id }).exec(callback),
//     }, (err, { conversation, forms, issue_tickets }) => {
//         if (err) return next(err);
//         if (forms.length + issue_tickets.length > 0) {
//             res.render('conversation_delete', { title: 'Delete Conversation', conversation, forms, issue_tickets });
//             return;
//         }
//         Conversation.findByIdAndRemove(req.body.id, deleteConversation = (err) => {
//             if (err) return next(err);
//             res.redirect('/conversation/all');
//         })
//     });
// };






exports.conversation_register = [
    body('user', 'User required').trim().isLength({ min: 1 }).escape(),
    body('lexSessionID', 'Lex Session ID required').trim().isLength({ min: 1 }).escape(),

    (req, res, next) => {
        // Extract validation errors, if any
        const errors = validationResult(req);

        const {
            user,
            lexSessionID,
            conversation_list,
        } = req.body;

        // Create new conversation object, with sanitized data
        const conversation = new Conversation({
            user: user,
            lexSessionID: lexSessionID,
            conversation_list: conversation_list || [
                {
                    user: user,
                    message: 'Hello',
                },
            ],
        });

        // If there is error, send back conversation
        if (!errors.isEmpty()) {
            // res.render('conversation_form', { title: 'Initiate Conversation', conversation, errors: errors.array() })
            // async.parallel({
            //     users: callback => User.find(callback),
            // }, (error, { users }) => {
            //     if (error) return next(error);
            //     // res.render('conversation_form', { title: 'Initiate Conversation', conversation, users, errors: errors.array() });
            //     // res.send({ error: "Duplicate entry" });
            // });
            // return;
        }
        conversation.save(error => {
            if (error) return next(error);
            // res.redirect('/conversation/all');
            res.send(conversation);
        })
    },
];
