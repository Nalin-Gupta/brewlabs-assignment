const express              = require('express');

const app                  = express();


const startupService       = require('./startup/startupService');

app.listen(3000 , () => {
    console.log("Server Started with port 3000")
})

startupService.initialize();

