const express = require('express'),
    bodyParser = require('body-parser'),
    mailgunConfig = require('../mailgun.config'),
    urlencodedParser = bodyParser.urlencoded({ extended: true }),
    router = express.Router(),
    mailgun = require('mailgun-js')({ apiKey: mailgunConfig.apiKey, domain: mailgunConfig.domain });

router.get('/', (request, response) => {
    response.render('contact', {
        title: 'Contact Us - GET'
    });
});

router.post('/', urlencodedParser, (request, response) => {
    let envelope = {
        from: mailgunConfig.from,
        to: mailgunConfig.to,
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
