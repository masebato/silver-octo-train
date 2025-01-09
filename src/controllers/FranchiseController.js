const franchiseService = require("../services/FranchiseService");

const createFranchise = async (req, res) => {
  try {
    const { name } = req.body;
    const franchise = await franchiseService.createFranchise(name);
    res.status(201).json(franchise);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllFranchises = async (req, res) => {
  try {
    const franchises = await franchiseService.getAllFranchises();
    res.status(200).json(franchises);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateFranchiseName = async (req, res) => {
  try {
    const { franchiseId } = req.params;
    const { name } = req.body;

    const updatedFranchise = await franchiseService.updateFranchiseName(
      franchiseId,
      name
    );

    res.status(200).json({
      message: "Nombre de la franquicia actualizado exitosamente",
      franchise: updatedFranchise,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar el nombre de la franquicia",
      error: error.message,
    });
  }
};

module.exports = { createFranchise, getAllFranchises, updateFranchiseName };
