const apartmentDal = require("../DAL/apartment");

module.exports.addApartment = async function addApartment(body) {
  return apartmentDal.addApartment(body);
};
module.exports.listApartments = async function listApartments() {
  return apartmentDal.listApartments();
};
module.exports.getApartmentByApartmentId =
  async function getApartmentByApartmentId(id) {
    return apartmentDal.getApartmentByApartmentId(id);
  };
module.exports.deleteApartment = async function deleteApartment(id) {
  return apartmentDal.deleteApartment(id);
};
