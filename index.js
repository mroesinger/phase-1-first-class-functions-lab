// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};
const returnLastTwoDrivers = function (array) {
  return array.slice(2, 4);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return multiplier * fare;
  };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, driversToReturn) {
  return driversToReturn(drivers);
};
