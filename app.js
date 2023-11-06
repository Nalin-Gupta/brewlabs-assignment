const express              = require('express');
const bodyParser           = require('body-parser');

app                  = express();

app.use(express.json());


require('./modules');

const startupService       = require('./startup/startupService');


startupService.initialize();
// app.listen(9000 , () => {
//     console.log("Server Started With Port 9000")
// })

app.get("/" , (req , res) => {
    console.log("Started Node Server")
    res.send("Started Node Server")
})

