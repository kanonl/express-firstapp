const express = require('express'),
    app = express(),
    compression = require('compression'),
    helmet = require('helmet'),
    path = require('path'),
    indexRouter = require('./routes/index'),
    accountRouter = require('./routes/account'),
    contactRouter = require('./routes/contact');

app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/contact', contactRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(process.env.PORT || 3030);
