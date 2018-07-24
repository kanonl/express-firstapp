const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('account', {
        title: 'Account',
        username: 'kanonl',
        account: '24de2922-6d96-40c0-b4a7-009176d6c4b8',
        summary: 'More often though than simply describing a person\'s out appearance because one loves the person, there is a deeper reason. The following paragraph by a former OWC student describes a person but the descriptions are only a support for an underlying political standpoint the author wants to make.',
        blockquote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
        footer: 'Martin Luther King Jr. in <a href="https://www.harpercollins.com/9780060646912/a-testament-of-hope/"><cite title="A Testament of Hope: The Essential Writings and Speeches">A Testament of Hope: The Essential Writings and Speeches</cite></a>',
        description: 'As literary students you may be asked to relate the role a character plays in a novel or as design students you may be asked to relate the role a person plays in a successful design, as a designer for instance. But how would you describe a person and their role? Depending on the subject or assignment, you could describe the person\'s physical appearance, behaviour, inner thoughts or the influence the person had on you or others. Make sure though that your paragraphs actually look like paragraphs with one topic sentence. Academic writing is much more structured than e-mails or letters, so that everything that belongs together stays together. In other words, your paragraph should look like a box when you are finished and not like lots of little paragraphs.'
    });
});

router.get('/:id', (request, response) => {
    response.render('account-detail', {
        title: 'Account Detail',
        id: request.params.id
    });
});

module.exports = router;
