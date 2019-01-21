const Service = require('egg').Service;

class LaunchService extends Service {
 async findAll() {
   const result = await this.ctx.curl(`${this.config.baseUrl}/launches`, { dataType: 'json' });
   return result.data;
 }

 async findOneByFlightNumber(flightNumber) {
   const result = await this.ctx.curl(`${this.config.baseUrl}/launches/${flightNumber}`, { dataType: 'json' });
   return result.data;
 }
}

module.exports = LaunchService;
