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
  };
  const { insertedId } = await categoriesCollection.insertOne(obj);

  return insertedId;
}

async function deleteCategory(id){
  console.log(id)
  await startDatabase();

  await categoriesCollection.deleteOne({_id: new ObjectId(id._id)});
}

module.exports = {
  getCategories,
  addCategory,
  deleteCategory
};
