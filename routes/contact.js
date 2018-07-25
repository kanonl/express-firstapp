const express = require('express'),
    bodyParser = require('body-parser'),
    urlencodedParser = bodyParser.urlencoded({ extended: true }),
    router = express.Router(),
    apiKey = '',
    domain = '',
    mailgun = require('mailgun-js')({ apiKey: apiKey, domain: domain });

router.get('/', (request, response) => {
    response.render('contact', {
        title: 'Contact Us - GET'
    });
});

router.post('/', urlencodedParser, (request, response) => {
    let envelope = {
        from: '',
        to: '',
        subject: 'mailgun-js test message',
        text: `${request.body.name} (${request.body.email}) sent you a message: ${request.body.message}`
    };

    mailgun.messages().send(envelope, (error, body) => {
        response.render('contact', {
            title: 'Contact Us - POST'
        });
    });
});

module.exports = router;
