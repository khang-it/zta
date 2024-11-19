const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('cam/index', { title: 'Web Mockup' });
});

router.get('/main', (req, res) => {
    res.render('cam/main', { title: 'Công việc' });
    // const pfile = __dirname + '/../views/cam/main.hbs';
    // console.log('pfile', pfile);
    // res.sendFile(pfile)
});

module.exports = router;
