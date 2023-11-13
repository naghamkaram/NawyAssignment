const express = require("express");

const router = express.Router();
const apartmentService = require("../Services/apartment");

router.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

router.post("/addApartment", async function addApartment(req, res, next) {
  const Joi = require("joi");
  const body = req.body;
  const schema = Joi.object().keys({
    location: Joi.string().max(20),
    size: Joi.number().max(20),
    floorNumber: Joi.string().max(10),
    isImmediate: Joi.boolean(),
  });
  const result = await apartmentService.addApartment(body);
  res.json({ result });
  const validation = schema.validate(body);

  if (validation.error == undefined) {
    const result = await apartmentService.addApartment(body);
    res.json({ result });
  } else {
    res.send(validation);
  }
});
router.get("/listApartments", async function listApartments(req, res, next) {
  const result = await apartmentService.listApartments();
  res.json({ result });
});
router.get(
  "/listApartmentDetails/:id",
  async function getApartmentByApartmentId(req, res, next) {
    const id = req.params.id;
    const result = await apartmentService.getApartmentByApartmentId(id);
    res.json({ result });
  }
);
router.delete(
  "/deleteApartment/:id",
  async function deleteApartment(req, res, next) {
    const id = req.params.id;
    const result = await apartmentService.deleteApartment(id);
    console.log("Apartment deleted");
    res.json({ result });
  }
);
module.exports = router;
