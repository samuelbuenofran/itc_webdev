import Region from "../models/regionModel.js";

async function getAllRegions(req, res) {
  const regions = await Region.findAll();
  res.json(regions);
}

async function createRegion(req, res) {
  const region = await Region.create(req.body);
  res.json(region);
}

async function deleteRegion(req, res) {
  const region = await Region.destroy({ where: { id: req.params.region_id } });
  res.json(region);
}

async function updateRegion(req, res) {
  const region = await Region.update(req.body, {
    where: {
      region_id: req.params.region_id,
    },
  });
  res.json(region);
}

async function getRegionById(req, res) {
  const region = await Region.findByPk(req.params.region_id);
  res.json(region);
}

export default {
  getAllRegions,
  createRegion,
  deleteRegion,
  updateRegion,
  getRegionById,
};
