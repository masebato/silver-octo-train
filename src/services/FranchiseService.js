const { Franchise: FranchiseModel } = require("../models");
const Franchise = require("../entities/Franchise");

class FranchiseService {
  constructor() {
    this.franchise = new Franchise(FranchiseModel);
  }

  async createFranchise(name) {
    return await this.franchise.create(name);
  }

  async updateFranchiseName(franchiseId, newName) {
    return await this.franchise.updateName(franchiseId, newName);
  }
}

module.exports = new FranchiseService();
