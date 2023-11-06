const database      = require("./../database/index.js")

exports.initialize  = initialize;

async function initialize() {
    try{
        await database.initialize();
        app.listen(config.get('PORT') , () => {
            console.log(`Server Started with port ${config.get('PORT')}`);
        })
    }catch(error){
        console.error(JSON.stringify(error));
    }
  }