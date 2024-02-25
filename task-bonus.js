// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

// Your code:
const drawTriangle = (length = 5) => {
  // ... write code ...
  const base = "*";

  // this is weird but nested (could have been done in single loop)
  for (i = 0; i < length; i++) {
    var tmp = base;
    for (j = 0; j < i; j++) {
      tmp += " *";
    }
    console.log(tmp);
  }
};

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

// Your code:
const drawJavascriptWord = (word = "javascript") => {
  // ... write code ...
  var word = word.toUpperCase();

  var base = "*";
  for (i = 1; i < word.length; i++) {
    base += " *";
  }

  console.log(base);

  for (i = word.length - 1; i >= 0; i--) {
    var last_i = base.lastIndexOf("*");
    base = String(
      base.substring(0, last_i) +
        word[i] +
        base.substring(last_i + 1, base.length),
    );
    console.log(base);
  }
};

// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

// Your code:
const getVehiclesAndTopSpeed = (vehicles) => {
  arr = [];
  for (vehicle of vehicles) {
    arr.push({
      name: vehicle.name,
      topSpeed: Math.max(...vehicle.measuredSpeeds),
    });
  }
  return arr;
};

function test() {
  drawTriangle();
  console.log("----------");
  drawJavascriptWord();
  console.log("----------");
  const vehicles = [
    { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
    { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
    { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
  ];
  console.log(getVehiclesAndTopSpeed(vehicles));
}

// test();
