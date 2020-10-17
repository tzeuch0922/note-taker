const fs = require('fs');
const path = require('path');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const { notes } = require('./db/db.json');

const port = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
app.use(express.static('public'));

app.listen(port, () =>
{
    console.log(`API server now on port ${port}!`);
});