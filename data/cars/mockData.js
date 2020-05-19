// Casual is a cool project that allows the generation of random data
const casual = require("casual");

// define a custom car make property
casual.define("car_make", function () {
  var carMakes = [
    "Mercedes",
    "Ford",
    "Ferrari",
    "Renault",
    "Peugeot",
    "Volkswagon",
  ];

  return carMakes[Math.floor(Math.random() * carMakes.length)];
});

// define the object structure, create a custom casual property
casual.define("car", function () {
  return {
    id: "ern:car:" + casual.uuid,
    type: "ern:car",
    attributes: {
      make: casual.car_make,
      description: casual.description,
      colour: casual.color_name,
    },
  };
});

const cars = [];

// Create 10 records of MockData
for (let i = 0; i < 10; i++) {
  cars.push(casual.car);
}

module.exports = {
  cars,
};
