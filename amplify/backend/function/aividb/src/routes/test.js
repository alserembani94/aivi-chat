const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req, res) => res.json(mongoose.connection.readyState));
// router.get('/', (req, res) => res.json({ message: "This is test route, not AIVI" }));

module.exports = router;