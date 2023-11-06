

const dbProperties                  = require('./dbProperties');
const mongoLib                      = require('./mongoLib');


exports.initialize                  = initialize;

db = undefined;

async function initialize() {
    try{
       await mongoLib.initialize();
        //If any other Database connection eg : mysql needs to be added later , it can be done here
    }catch(error){
        console.error(JSON.stringify(error));
    }
  }