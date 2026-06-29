import { getAllMotorcycles } from "../services/motorcycle.service.js";

export async function getMotorcycles(req, res) {
  try {
    const motorcycle = await getAllMotorcycles();

    res.json(motorcycle);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
