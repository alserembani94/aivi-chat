const User = require('../models/user');
// const Conversation = require('../models/conversation');
// const Form = require('../models/form');
// const IssueTicket = require('../models/issueTicket');
// const { body, validationResult } = require('express-validator');
const async = require('async');

exports.user_index = (req, res) => {
    async.parallel({
        user_count: (callback) => User.countDocuments({}, callback),
    }, (error, data) => {
        // res.render('index_user', { title: 'Users', error, data });
        res.json({ data, error })
    });
}

// // 3.1 CREATE - Create new user
// exports.user_create_get = (req, res) => {
//     res.render('user_form', { title: 'Create User' });
// };

// exports.user_create_post = [
//     // First, sanitize the input
//     body('id', 'User ID required - get from AWS Cognito').trim().isLength({ min: 1 }).escape(),
//     body('username', 'Username required - get from AWS Cognito').trim().isLength({ min: 1 }).escape(),

//     // Second, submit data
//     (req, res, next) => {
//         // Extract validation errors, if any
//         const errors = validationResult(req);

//         // Create new user object, with sanitized data
//         const user = new User({
//             _id: req.body.id,
//             username: req.body.username,
//         });

//         // If there is error, send back user
//         if (!errors.isEmpty()) {
//             res.render('user_form', { title: 'Create User', user, errors: errors.array() });
//             return;
//         }
//         else {
//             // We need to check for duplication
//             User
//             .findOne({ _id: req.body.id })
//             .exec((error, found_user) => {
//                 if (error) return error;
//                 if (found_user) res.render('user_form', { title: 'Create User', user, errors: [{ msg: `user ${user.id} already exists` }] });
//                 else {
//                     user.save((error) => {
//                         if (error) return next(error);
//                         res.redirect('/user/all');
//                     })
//                 }

//             })
//         }
//     }
// ];

// 3.2 READ - Display all users
exports.user_list = (req, res, next) => {
    User
    .find({})
    .exec((err, user_list) => {
        if (err) return next(err);
        // res.render('user_list', { title: 'User List', user_list });
        res.send(user_list);
    })
};

// exports.user_detail = (req, res, next) => {
//     User
//     .findById(req.params.id)
//     .exec((error, user) => {
//         if (error) return next(error);
//         if (!user) {
//             const error = new Error('User not found');
//             error.status = 404;
//             return next(error);
//         }
//         res.render('user_detail', { title: 'User Detail', user });
//     });
// };

// // 3.3 UPDATE - Update user
// exports.user_update_get = (req, res, next) => {
//     async.parallel({
//         user: callback => User.findById(req.params.id).exec(callback),
//     }, (error, { user }) => {
//         if (error) return next(error);
//         if (!user) {
//             const error = new Error('User not found');
//             error.status = 404;
//             res.send(req.params.id);
//         }
//         res.render('user_form', { title: 'Update User', user });
//     });
// };

// exports.user_update_post = [
//     // First, sanitize the input
//     body('id', 'User ID required - get from AWS Cognito').trim().isLength({ min: 1 }).escape(),
//     body('username', 'Username required - get from AWS Cognito').trim().isLength({ min: 1 }).escape(),

//     // Second, submit data
//     (req, res, next) => {
//         // Extract validation errors, if any
//         const errors = validationResult(req);

//         // Create new user object, with sanitized data
//         const user = new User({
//             _id: req.body.id,
//             username: req.body.username,
//         });

//         // If there is error, send back user
//         if (!errors.isEmpty()) {
//             res.render('user_form', { title: 'Create User', user, errors: errors.array() });
//             return;
//         }
//         else {
//             // We need to check for duplication
//             User
//             .findByIdAndUpdate(req.params.id, user, {}, (error, found_user) => {
//                 if (error) return next(error);
//                 res.redirect(found_user.url);
//             });
//         }
//     }
// ];

// // 3.4 DELETE - Delete user
// exports.user_delete_get = (req, res, next) => {
//     async.parallel({
//         user: callback => User.findById(req.params.id).exec(callback),
//         conversations: callback => Conversation.find({ user: req.params.id }).exec(callback),
//     }, (error, { user, conversations }) => {
//         if (error) return next(error);
//         if (!user) res.redirect('/user/all');
//         res.render('user_delete', { title: 'Delete User', user, conversations });
//     });
// };

// exports.user_delete_post = (req, res, next) => {
//     async.parallel({
//         user: callback => User.findById(req.body.id).exec(callback),
//         conversations: callback => Conversation.find({ user: req.body.id }).exec(callback),
//     }, (error, { user, conversations }) => {
//         if (error) return next(error);
//         if (conversation.length + form.length + issue_ticket.length > 0) {
//             res.render('user_delete', { title: 'Delete User', user, conversations });
//             return;
//         }
//         User.findByIdAndRemove(req.body.id, deleteUser = (error) => {
//             if (error) return next(error);
//             res.redirect('/user/all');
//         })
//     });
// };
