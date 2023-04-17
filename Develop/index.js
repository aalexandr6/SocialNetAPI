const express = require('express');
const db = require('./config/cnnection');
const routes = require('./routes');
const cwd = process.cwd();
const app = express();
const PORT = process.env.PORT || 3001;


//listening
app.listen(PORT, () => {
    console.log(`Now live on ${PORT}!`);
    });








