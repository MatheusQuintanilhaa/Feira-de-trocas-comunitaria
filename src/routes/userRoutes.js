import { Router } from "express";
import userController from "../controllers/userController.js";
import authenticate from "../../middlewares/authenticate.js";

const router = Router();

router.post("/register", userController.createUser);
router.post("/login", userController.login);

router.get("/", authenticate, userController.getAllUsers);
router.get("/:id", authenticate, userController.getUserById);

export default router;
