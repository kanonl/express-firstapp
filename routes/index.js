const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'hey',
        message: 'hello',
        people: [
            'kanon',
            'steve',
            'dave',
            'frank',
            'green tea'
        ]
    });
});

module.exports = router;
