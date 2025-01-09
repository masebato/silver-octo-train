const branchService = require("../services/BranchService");

const addBranchToFranchise = async (req, res) => {
  try {
    const { franchiseId, name } = req.body;

    const branch = await branchService.addBranchToFranchise(franchiseId, name);

    res.status(201).json({
      message: "Sucursal creada exitosamente",
      branch,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al crear la sucursal",
      error: error.message,
    });
  }
};

const updateBranchName = async (req, res) => {
  try {
    const { branchId } = req.params;
    const { name } = req.body;
    const updatedBranch = await branchService.updateBranchName(branchId, name);

    res.status(200).json({
      message: "Nombre de la sucursal actualizado exitosamente",
      branch: updatedBranch,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar el nombre de la sucursal",
      error: error.message,
    });
  }
};

const getAllBranches = async (req, res) => {
  try {
    const branches = await branchService.getAllBranches();
    res.status(200).json(branches);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las sucursales",
      error: error.message,
    });
  }
};

module.exports = { addBranchToFranchise, updateBranchName, getAllBranches };
