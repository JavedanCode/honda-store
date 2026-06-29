import { Router } from "express";

import { getMotorcycles } from "../controllers/motorcycle.controller.js";
const router = Router();
router.get("/", getMotorcycles);
export default router;
