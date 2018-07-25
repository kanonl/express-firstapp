const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Simple. Powerful. Reliable.',
        message: 'Whether you’re just getting started or deploying a complex system, launching a Linode cloud server has never been easier. We offer the fastest hardware and network in the industry with scalable environments.',
        people: [
            'Leonardo',
            'Donatello',
            'Michelangelo',
            'Raphael'
        ]
    });
});

module.exports = router;
