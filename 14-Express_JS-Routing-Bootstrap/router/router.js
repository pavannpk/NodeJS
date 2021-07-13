const express = require('express');
const router = express.Router();
const path = require('path');

//routing
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'home.html'));
});
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..','views', 'about.html'));
});
router.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'services.html'));
});
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..','views', 'Contact.html'));
});



module.exports = router;
