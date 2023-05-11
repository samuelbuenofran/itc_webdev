import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.post("/", userController.createUser);
router.delete("/:user_id", userController.deleteUser);
router.put("/:user_id", userController.updateUser);
router.get("/:user_id", userController.getUserById);

export default router;
