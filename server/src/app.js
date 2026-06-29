import express from "express";
import cors from "cors";

import motorcycleRoutes from "./routes/motorcycle.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/motorcycles", motorcycleRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Honda Store API is running" });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
