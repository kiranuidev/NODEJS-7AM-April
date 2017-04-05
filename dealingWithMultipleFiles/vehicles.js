var listOfVehicles = require("./data");
var vehicles = {};

vehicles.getVehicleList = function() {
    return listOfVehicles;
};
module.exports = vehicles;