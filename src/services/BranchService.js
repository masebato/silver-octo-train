const { Branch: BranchModel } = require("../models");
const Branch = require("../entities/Branch");
class BranchService {
  constructor() {
    this.branch = new Branch(BranchModel);
  }

  async addBranchToFranchise(franchiseId, branchName) {
    if (!franchiseId) {
      throw new Error("El ID de la franquicia es requerido");
    }

    if (!branchName || typeof branchName !== "string") {
      throw new Error("El nombre de la sucursal es requerido y debe ser texto");
    }

    if (branchName.trim().length < 3 || branchName.trim().length > 50) {
      throw new Error(
        "El nombre de la sucursal debe tener entre 3 y 50 caracteres"
      );
    }

    const existingBranch = await this.branch.validateNameForFranchise(
      branchName,
      franchiseId
    );

    if (existingBranch) {
      throw new Error(
        "Ya existe una sucursal con este nombre para la franquicia"
      );
    }

    const branch = await this.branch.addBranchToFranchise(
      franchiseId,
      branchName
    );

    return branch;
  }

  async updateBranchName(branchId, newName) {
    const branch = await this.branch.validateBranch(branchId);
    if (!branch) {
      throw new Error("La sucursal no existe");
    }

    if (!newName || newName.trim() === "") {
      throw new Error("El nombre no puede estar vacío");
    }

    return await this.branch.updateName(branchId, newName);
  }
}

module.exports = new BranchService();
