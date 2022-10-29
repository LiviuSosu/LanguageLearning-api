const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<username>:<password>@cluster0.re2kq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function  getAds() {
  console.log("aaa44");
  client.connect(err => {
    const collection = client.db("sample_mflix").collection("comments");
    // perform actions on the collection object
    //client.close();
  });

  const collection = await client.db("sample_mflix").collection("comments").find({}).toArray();
  console.log(collection);
  }

module.exports = {
    getAds,
  };