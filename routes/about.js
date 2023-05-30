//Import express
const express = require('express');
// Create router object
const router = express.Router();
//Configure middleware
// All paths here are relative to /About
// GET handler for /About

//root of about section
router.get('/', (req, res) => {
    res.render('about', {title: 'About Us'});
});

//Export it
module.exports = router;
