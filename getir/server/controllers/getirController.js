const { toObjectId: ObjectId } = require("../database");

const getir = require("../database").getGetirCaseStudy();

module.exports.addGetir = (parameters) => {
  return getir
    .insertOne(result)
    .then((result) => {
      if (result) {
        return {
          status: true,
          message: "getir added  successfully",
          data: result,
        };
      }
      throw new Error("Error adding child");
    })
    .catch((error) => {
      throw { status: false, message: error.message };
    });
};
module.exports.getAllGetir = () => {
  return getir
    .find({})
    .toArray()
    .then((result) => {
      if (result) {
        return {
          status: true,
          message: "getir fetch successfully",
          data: result,
        };
      }
      throw new Error("Error fetching getir");
    })
    .catch((error) => {
      throw { status: false, message: error.message };
    });
};
module.exports.getGetirById = (parameter) => {
  const { id } = parameter;
  return district
    .findOne({ _id: ObjectId(id) })
    .then((result) => {
      if (result) {
        return {
          status: true,
          message: "getir fetch successfully",
          data: result,
        };
      }
      throw new Error("Error fetching getir");
    })
    .catch((error) => {
      throw { status: false, message: error.message };
    });
};

module.exports.deleteGetirById = (parameter) => {
  const { id } = parameter;
  return getir
    .findOneAndDelete({ _id: ObjectId(id) })
    .then((result) => {
      if (result) {
        return {
          status: true,
          message: "getir deleted successfully",
          data: result,
        };
      }
      throw new Error("Error deleting getir");
    })
    .catch((error) => {
      throw { status: false, message: error.message };
    });
};
