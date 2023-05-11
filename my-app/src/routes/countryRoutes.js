import express from "express";
import countryController from "../controllers/countryController.js";

const router = express.Router();

router.get("/", countryController.getAllCountries);
router.post("/", countryController.createCountry);
router.delete("/:country_id", countryController.deleteCountry);
router.put("/:country_id", countryController.updateCountry);
router.get("/:country_id", countryController.getCountryById);

export default router;
