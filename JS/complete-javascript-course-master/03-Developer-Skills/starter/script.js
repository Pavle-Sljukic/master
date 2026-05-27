// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [13, -12, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcAmp = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   let max = temps[0],
//     min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   return max - min;
// };

// console.log(calcAmp(temperatures1, temperatures2));
// const measureKelvin = function () {
//   const measurement = {
//     type: 'temperature',
//     unit: 'celsius',
//     value: prompt('Degrees Celsius'),
//   };

//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const temperatures = [17, 21, 23];

const printForecast = function (temps) {
  let forecast = '';
  for (let i = 0; i < temps.length; i++) {
    forecast += `...${temps[i]}C in ${i + 1} days`;
  }
  return forecast;
};

console.log(printForecast(temperatures));
