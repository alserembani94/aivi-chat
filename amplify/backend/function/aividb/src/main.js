var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var testRouter = require('./routes/test');

const conversationRouter = require('./routes/conversation');
const userRouter = require('./routes/user');
const formRouter = require('./routes/form');
const issueTicketRouter = require('./routes/issueTicket');

router.get('/', (req, res) => {
    res.json({ env: mongoose.connection.readyState });
});

// router.use('/test', testRouter);

router.use('/conversation', conversationRouter);
// router.get('/user', function(req, res) { res.json({ message: 'User route' }) })
router.use('/user', userRouter);
router.use('/form', formRouter);
router.use('/issue_ticket', issueTicketRouter);

module.exports = router;