
const database      = require("./../database/index.js")


exports.initialize  = initialize;

async function initialize() {
    try{
        console.log("STARTING SERVER");
        await database.initialize();
        app.listen(9000 , () => {
            console.log("Server Started with port 9000");
        })

    }catch(error){
        console.error(JSON.stringify(error));
    }
  }