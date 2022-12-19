const { MongoClient, ServerApiVersion } = require('mongodb');

const mongoDbUserName = process.env.MongoDbUserName;
const mongoDbPassword = process.env.MongoDbPassword;

const uri = "mongodb+srv://"+mongoDbUserName+":"+mongoDbPassword+"@cluster0.re2kq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function  getAds() {
  client.connect(err => {
    const collection = client.db("language_learning").collection("categories");
    // perform actions on the collection object
    //client.close();
  });

  const collection = await client.db("language_learning").collection("categories").find({}).toArray();
  console.log(collection);
  return collection;
  }

module.exports = {
    getAds,
  };