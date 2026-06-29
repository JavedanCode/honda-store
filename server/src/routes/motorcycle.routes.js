import { Router } from "express";

import {
  getMotorcycles,
  getMotorcycle,
  getMotorcycleCategories,
} from "../controllers/motorcycle.controller.js";

const router = Router();

router.get("/", getMotorcycles);

router.get("/categories", getMotorcycleCategories);

router.get("/:slug", getMotorcycle);

export default router;
