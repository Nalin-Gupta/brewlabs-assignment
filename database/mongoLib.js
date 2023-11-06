const { MongoClient, ServerApiVersion , ObjectId }  = require('mongodb');

exports.initialize                                = initialize;
exports.insert                                    = insert;
exports.getAll                                    = getAll;
exports.getById                                   = getById;
exports.update                                    = update;
exports.remove                                    = remove;

// const conn = new MongoClient();

const client = new MongoClient(config.get('databaseSettings.mongo_db_connection'), {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

let connection;
let db;


async function initialize() {
    try{
        connection = await client.connect();
        db = connection.db(config.get("databaseSettings.database"));
        console.log("Connected To Mongo");
    }catch(error){
      return error;
    }
}

async function getAll(tableName, condition){
  try{
    let collection = await db.collection(tableName);
    let result     = await collection.find(condition).toArray();
    return result;
  }catch(error){
    return error;
  }
}

async function getById(tableName , id){
  try{
    let collection = await db.collection(tableName);
    let result     = await collection.findOne({_id: new ObjectId(id)});
    return result;
  }catch(error){
    return error;
  }
}

async function update(tableName,id,updates) {
  try{
    let collection = await db.collection(tableName);
    let result     = await collection.findOneAndUpdate({_id :  new ObjectId(id)}, updates); 
    console.log(result)
    return result;
  }catch(error){
    return error;
  }
}

async function insert(tableName, data) {
  try{
    let collection = await db.collection(tableName);
    let result = await collection.insertOne(data);
    return result;
  }catch(error){
    return error
  }
}

async function remove(tableName, id) {
 try{

  let collection = await db.collection(tableName);
  let result = await collection.deleteOne({_id : new ObjectId(id)})

  return result;

 }catch(error){
  return error;
 }
}