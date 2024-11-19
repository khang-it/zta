const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('chat/index', { title: 'Web Mockup' });
});

module.exports = router;
