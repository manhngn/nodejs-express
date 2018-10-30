const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    const name = req.cookies.username
    res.render('index', { name });
});

router.get('/hello', function (req, res) {
    res.render('hello', { name: req.cookies.username });
});

router.post('/hello', function (req, res) {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

router.get('/cards', function (req, res) {
    res.render('card', { prompt: "Who is buried in Grant's tomb?" })
});

module.exports = router;