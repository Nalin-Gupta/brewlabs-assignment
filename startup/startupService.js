
const database      = require("./../database/index.js")


exports.initialize  = initialize;

async function initialize() {
    try{
        console.log("STARTING SERVER");
        await database.initialize();

    }catch(error){
        console.error(JSON.stringify(error));
    }
  }