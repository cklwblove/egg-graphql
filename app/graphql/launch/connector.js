'use strict';

const DataLoader = require('dataloader');

class LaunchConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.loader = new DataLoader(this.fetch.bind(this));
  }

  fetch(flightNumber) {
    return new Promise(async (resolve, reject) => {
      const launch = await this.ctx.service.launch.findOneByFlightNumber(flightNumber);
      this.ctx.logger.info(launch);
      resolve([launch])
    })
  }

  fetchByNum(flightNumber) {
    return this.loader.load(flightNumber);
  }

  async fetchByFlightNumber(flightNumber) {
    return this.loader.load(flightNumber);
  }

  async fetchAll() {
    const result = await this.ctx.service.launch.findAll();
    return result;
  }

}

module.exports = LaunchConnector;
