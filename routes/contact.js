const express = require('express'),
    bodyParser = require('body-parser'),
    urlencodedParser = bodyParser.urlencoded({ extended: true }),
    router = express.Router(),
    mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_APIKEY, domain: process.env.MAILGUN_DOMAIN });

router.get('/', (request, response) => {
    response.render('contact', {
        title: 'Contact Us - GET'
    });
});

router.post('/', urlencodedParser, (request, response) => {
    let envelope = {
        from: process.env.MAILGUN_FROM,
        to: process.env.MAILGUN_TO,
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
