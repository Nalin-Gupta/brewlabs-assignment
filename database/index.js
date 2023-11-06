

const dbProperties                  = require('./dbProperties');
const mongoLib                      = require('./mongoLib');


exports.initialize                  = initialize;

async function initialize() {
    try{
        let db      = await mongoLib.initialize();
        //If any other Database connection eg : mysql needs to be added later , it can be done here
    }catch(error){
        console.error(JSON.stringify(error));
    }
  }