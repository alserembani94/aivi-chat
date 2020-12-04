const Form = require('../models/form');
const async = require('async');
const User = require('../models/user');
const Conversation = require('../models/conversation');
const { body, validationResult } = require('express-validator');

// Index view
exports.form_index = (req, res) => {
    async.parallel({
        form_count: (callback) => Form.countDocuments({}, callback),
    }, (error, data) => {
        // res.render('index_form', { title: 'Forms', error, data });
        res.json({ error, data })
    });
}

// // 3.1 CREATE - Create new form
// exports.form_create_get = (req, res, next) => {
//     // res.send('NOT IMPLEMENTED: Form create GET');
//     async.parallel({
//         users: callback => User.find(callback),
//         conversations: callback => Conversation.find(callback),
//     }, (error, { users, conversations }) => {
//         if (error) return next(error);
//         res.render('form_form', { title: 'Create Form', users, conversations });
//     });
// };

exports.form_create_post = [
    body('user', 'User required').trim().isLength({ min: 1 }).escape(),
    body('conversation', 'Conversation required').trim().isLength({ min: 1 }).escape(),
    body('formType', 'Form type required').trim().isLength({ min: 1 }).escape(),

    (req, res, next) => {
        const errors = validationResult(req);

        const {
            user,
            conversation,
            formType,
            formContent,
        } = req.body;

        const form = new Form({
            user,
            conversation,
            formType,
            formContent: formContent || {
                transferFrom: '',
                name: '',
                phoneNo: '',
                email: '',
                amount: 0,
            }
        });

        if (!errors.isEmpty()) {
            async.parallel({
                users: callback => User.find(callback),
                conversations: callback => Conversation.find(callback),
            }, (error, { users, conversations }) => {
                if (error) return next(error);
                // res.render('form_form', { title: 'Create Form', users, conversations, form });
                // res.send({ error: "" })
            });
            return;
        }
        form.save(error => {
            if (error) return next(error);
            // res.redirect('/form/all');
            res.send("Form insert success");
        })
    }
];

// 3.2 READ - Display all forms
exports.form_list = (req, res, next) => {
    Form
    .find({})
    .populate('user')
    .populate('conversation')
    .exec((err, form_list) => {
        if (err) return next(err);
        // res.render('form_list', { title: 'Form List', form_list });
        res.send(form_list);
    });
};

// exports.form_detail = (req, res, next) => {
//     // res.send('NOT IMPLEMENTED: Form detail: ' + req.params.id);
//     async.parallel({
//         form: (callback) => {
//             Form.findById(req.params.id)
//                 .populate('user')
//                 .populate('conversation')
//                 .exec(callback);
//         }
//     }, (err, { form }) => {
//         if (err) return next(err);
//         if (form === null)  {
//             const err = new Error('Form not found');
//             err.status = 404;
//             return next(err);
//         }
//         res.render('form_detail', { title: form.formType, form });
//         // res.send(form);
//     });
// };

// // 3.3 UPDATE - Update form
// exports.form_update_get = (req, res, next) => {
//     async.parallel({
//         form: callback => Form.findById(req.params.id).exec(callback),
//         users: callback => User.find(callback),
//         conversations: callback => Conversation.find(callback),
//     }, (error, { form, users, conversations }) => {
//         if (error) return next(error);
//         if (!form) {
//             const error = new Error('Form not found');
//             error.status = 404;
//             res.send(req.params.id);
//         }
//         res.render('form_form', { title: 'Update Form', form, users, conversations });
//     });
// };

// exports.form_update_post = [
//     // First, sanitize the input
//     body('user', 'User required').trim().isLength({ min: 1 }).escape(),
//     body('conversation', 'Conversation required').trim().isLength({ min: 1 }).escape(),
//     body('formType', 'Form type required').trim().isLength({ min: 1 }).escape(),

//     // Second, submit data
//     (req, res, next) => {
//         // Extract validation errors, if any
//         const errors = validationResult(req);

//         // Create new user object, with sanitized data
//         const form = new Form({
//             _id: req.params.id,
//             user: req.body.user,
//             conversation: req.body.conversation,
//             formType: req.body.formType,
//             formContent: {
//                 transferFrom: req.body.transferFrom,
//                 name: req.body.name,
//                 phoneNo: req.body.phoneNo,
//                 email: req.body.email,
//                 amount: parseInt(req.body.amount, 10),
//             }
//         });

//         // If there is error, send back user
//         if (!errors.isEmpty()) {
//             async.parallel({
//                 users: callback => User.find(callback),
//                 conversations: callback => Conversation.find(callback),
//             }, (error, { users, conversations }) => {
//                 if (error) return next(error);
//                 res.render('form_form', { title: 'Update form', form, conversations, users, errors: errors.array() });
//             });
//             return;
//         }
//         else {
//             // We need to check for duplication
//             Form
//             .findByIdAndUpdate(req.params.id, form, {}, (error, found_form) => {
//                 if (error) return next(error);
//                 res.redirect(found_form.url);
//             });
//         }
//     }
// ];

// // 3.4 DELETE - Delete form
// exports.form_delete_get = (req, res) => {
//     async.parallel({
//         form: callback => Form.findById(req.params.id).exec(callback),
//     }, (error, { form }) => {
//         if (error) return next(error);
//         if (!form) res.redirect('/form/all');
//         res.render('form_delete', { title: 'Delete Form', form });
//     });
// };

// exports.form_delete_post = (req, res, next) => {
//     async.parallel({
//         form: callback => Form.findById(req.body.id).exec(callback),
//     }, (error) => {
//         if (error) return next(error);
//         Form.findByIdAndRemove(req.body.id, deleteForm = (error) => {
//             if (error) return next(error);
//             res.redirect('/form/all');
//         })
//     });
// };
