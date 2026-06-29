import {
  getAllMotorcycles,
  getMotorcycleBySlug,
  getCategories,
} from "../services/motorcycle.service.js";

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

export async function getMotorcycle(req, res) {
  try {
    const motorcycle = await getMotorcycleBySlug(req.params.slug);

    if (!motorcycle) {
      return res.status(404).json({
        message: "Motorcycle not found",
      });
    }
    res.json(motorcycle);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}

export async function getMotorcycleCategories(req, res) {
  try {
    const categories = await getCategories();

    res.json(categories);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
