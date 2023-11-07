const express                   = require('express');
app                             = express();

process.env.NODE_CONFIG_DIR     = 'config/';
config                          = require('config');

app.use(express.json());

require('./modules');

const startupService       = require('./startup/startupService');

startupService.initialize();

//Default GET API : 
app.get("/" , (req , res) => {
    res.send("Brew Sage Nodejs Challenege Nov - 2023 By Nalin Gupta")
})