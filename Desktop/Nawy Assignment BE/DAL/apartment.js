const { Apartment } = require("../Models/Apartement");

module.exports.addApartment = async function addApartment(body) {
  return await Apartment.create(body);
};
module.exports.listApartments = async function listApartments() {
  return await Apartment.find();
};
module.exports.getApartmentByApartmentId =
  async function getApartmentByApartmentId(id) {
    return await Apartment.findById(id);
  };
module.exports.deleteApartment = async function deleteApartment(id) {
  return await Apartment.findByIdAndDelete(id);
};
