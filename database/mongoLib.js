const { MongoClient, ServerApiVersion }             = require('mongodb');

// const MongoClient                                 = require('mongodb').MongoClient;

const dbProperties                                  = require('./dbProperties');

exports.initialize                                = initialize;
// exports.find                                      = find;
// exports.update                                    = update;
// exports.insert                                    = insert;
// exports.remove                                    = remove;
// exports.insertMany                                = insertMany;

// const conn = new MongoClient();
const client = new MongoClient(dbProperties.mongo.connectionString, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });


async function initialize(opts) {
    try{
        await client.connect();
        console.log("STARTING MONGO CONNECTION");
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        // return conn;

    }finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

