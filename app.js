const express                   = require('express');
app                             = express();

process.env.NODE_CONFIG_DIR     = 'config/';
config                          = require('config');

app.use(express.json());

require('./modules');

const startupService       = require('./startup/startupService');

startupService.initialize();