const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoDbUserName = process.env.MongoDbUserName;
const mongoDbPassword = process.env.MongoDbPassword;

const uri = "mongodb+srv://"+mongoDbUserName+":"+mongoDbPassword+"@cluster0.re2kq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

let categoriesCollection = null;

async function startDatabase() {
  client.connect(err => {
    categoriesCollection = client.db("language_learning").collection("categories").find({}).toArray();
  });
}

async function  getAds() {
  if(categoriesCollection==null){
    startDatabase();
  }
  
  return categoriesCollection;
  }

module.exports = {
    getAds,
  };