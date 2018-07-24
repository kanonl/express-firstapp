const express = require('express'),
    app = express(),
    path = require('path'),
    indexRouter = require('./routes/index'),
    accountRouter = require('./routes/account');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/account', accountRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(process.env.PORT || 3000);
