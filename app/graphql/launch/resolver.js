'use strict';

module.exports = {
  Query: {
    launch(root, {flight_number},ctx) {
      return ctx.connector.launch.fetchByFlightNumber(flight_number);
    },
    launches(root, {}, ctx) {
      return ctx.connector.launch.fetchAll();
    }
  }
}
