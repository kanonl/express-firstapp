const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('account', {
        title: 'Account',
        username: 'kanonl',
        account: '24de2922-6d96-40c0-b4a7-009176d6c4b8',
        summary: 'More often though than simply describing a person\'s out appearance because one loves the person, there is a deeper reason. The following paragraph by a former OWC student describes a person but the descriptions are only a support for an underlying political standpoint the author wants to make.',
        blockquote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
        footer: 'Someone famous in <a href="https://www.google.com/" target="_blank"><cite title="Source Title">Source Title</cite></a>',
        description: 'As literary students you may be asked to relate the role a character plays in a novel or as design students you may be asked to relate the role a person plays in a successful design, as a designer for instance. But how would you describe a person and their role? Depending on the subject or assignment, you could describe the person\'s physical appearance, behaviour, inner thoughts or the influence the person had on you or others. Make sure though that your paragraphs actually look like paragraphs with one topic sentence. Academic writing is much more structured than e-mails or letters, so that everything that belongs together stays together. In other words, your paragraph should look like a box when you are finished and not like lots of little paragraphs.'
    });
});

module.exports = router;
