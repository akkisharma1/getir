const { MongoClient, ObjectId } = require("mongodb");
const { MONGO_URL, MONGO_DATABASE_NAME } = require("../config");

let client = undefined;
let db = undefined;

//collections

let getir_case_study = undefined;



module.exports.connect = (options) => {
  return MongoClient.connect(MONGO_URL, { useUnifiedTopology: true })
    .then((mongoClient) => {
      client = mongoClient;
      db = client.db(MONGO_DATABASE_NAME);

      //setting collections here
      getir_case_study = db.collection("getir_case_study");
     

      return db;
    })
    .catch((error) => {
      throw error;
    });
};

module.exports.toObjectId = (id) => {
  return ObjectId(id);
};

module.exports.generateHexString = () => {
  const _id = new ObjectId();
  return _id.toHexString();
};

module.exports.getGetirCaseStudy = () => {
  //Safe check
  if (db) {
    return getir_case_study;
  }
  return null;
};
process.on("SIGINT", () => {
  client.close(() => {
    console.log("Database connection terminated");
    process.exit(0);
  });
});
