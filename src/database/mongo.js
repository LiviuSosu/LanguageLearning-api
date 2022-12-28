const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const mongoDbUserName = process.env.MongoDbUserName;
const mongoDbPassword = process.env.MongoDbPassword;

const collectionName = "language_learning.categories";

const uri =
  "mongodb+srv://" +
  mongoDbUserName +
  ":" +
  mongoDbPassword +
  "@cluster0.re2kq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

let categoriesCollection = null;

async function startDatabase() {
  if (categoriesCollection == null) {
    client.connect();
    categoriesCollection = await client
      .db("language_learning")
      .collection("categories");
  }
}

async function getCategories() {
  await startDatabase();

  return categoriesCollection.find({}).toArray();
}

async function addCategory(category) {
  await startDatabase();

  var obj = {
    categoryName: category.categoryName,
    words: []
  };
  const { insertedId } = await categoriesCollection.insertOne(obj);

  return insertedId;
}

async function deleteCategory(id){
  await startDatabase();

  await categoriesCollection.deleteOne({_id: new ObjectId(id._id)});
}

async function addWord(categoryId,request){
await startDatabase();

var x = await categoriesCollection.find({_id: new ObjectId(categoryId)}).toArray();
var y = x[0].words;

const options = { upsert: true };
const filter = { _id: new ObjectId(categoryId) };
const updateDoc = {
  $set: {
    words: {
      word: request.word,
      imageUrl: request.imageUrl
    }
  },
};

const result = "";//await categoriesCollection.updateOne(filter, updateDoc, options);

return result;
}

module.exports = {
  getCategories,
  addCategory,
  deleteCategory,
  addWord
};
