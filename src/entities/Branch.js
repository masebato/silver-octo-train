class Branch {
  constructor(model) {
    this.model = model;
  }

  async create(name, franchiseId) {
    return await this.model.create({ name, franchiseId });
  }

  async findById(id) {
    return await this.model.findByPk(id, { include: "products" });
  }

  async validateBranch(branchId) {
    return await this.model.findByPk(branchId);
  }

  async validateNameForFranchise(name, franchiseId) {
    return await this.model.findOne({ where: { name, franchiseId } });
  }

  async addBranchToFranchise(franchiseId, branchName) {
    return await this.model.create({ name: branchName, franchiseId });
  }

  async updateName(branchId, newName) {
    const branch = await this.model.findByPk(branchId);
    branch.name = newName;
    await branch.save();
    return branch;
  }

  async getAllBranches() {
    return await this.model.findAll();
  }
}

module.exports = Branch;
