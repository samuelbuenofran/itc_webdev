import express from "express";
import regionController from "../controllers/regionController.js";

const router = express.Router();

router.get("/", regionController.getAllRegions);
router.post("/", regionController.createRegion);
router.delete("/:region_id", regionController.deleteRegion);
router.put("/:region_id", regionController.updateRegion);
router.get("/:region_id", regionController.getRegionById);

export default router;
