import { Router } from "express";

import { getMotorcycles } from "../controllers/motorcycle.controller";
const router = Router();
router.get("/", getMotorcycles);
export default router;
