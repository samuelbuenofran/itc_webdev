import Country from "../models/countryModel.js";

async function getAllCountries(req, res) {
  const countries = await Country.findAll();
  res.json(countries);
}

async function createCountry(req, res) {
  const country = await Country.create(req.body);
  res.json(country);
}

async function deleteCountry(req, res) {
  const country = await Country.destroy({
    where: { country_id: req.params.country_id },
  });
  res.json(country);
}

async function updateCountry(req, res) {
  const country = await Country.update(req.body, {
    where: {
      country_id: req.params.country_id,
    },
  });
  res.json(country);
}

async function getCountryById(req, res) {
  const country = await Country.findByPk(req.params.country_id);
  res.json(country);
}

export default {
  getAllCountries,
  createCountry,
  deleteCountry,
  updateCountry,
  getCountryById,
};
