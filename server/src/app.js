import express from "express";
import cors from "cors";

import motorcycleRoutes from "./routes/motorcycle.routes.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "public", "images")));

app.use("/api/motorcycles", motorcycleRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Honda Store API is running" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
