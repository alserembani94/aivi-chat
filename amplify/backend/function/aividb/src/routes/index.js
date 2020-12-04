const express = require('express');
const router = express.Router();
const async = require('async');

const Conversation = require('../models/conversation');
const Form = require('../models/form');
const User = require('../models/user');
const IssueTicket = require('../models/issueTicket');

/* GET home page. */
router.get('/', function(req, res) {
    async.parallel({
        conversation_count: (callback) => Conversation.countDocuments({}, callback),
        form_count: (callback) => Form.countDocuments({}, callback),
        user_count: (callback) => User.countDocuments({}, callback),
        issue_ticket_count: (callback) => IssueTicket.countDocuments({}, callback),
    }, (err, results) => {
        res.render('index', { title: 'AIVI API', error: err, data: results });
    });
    // res.redirect('/conversation');
});

module.exports = router;
