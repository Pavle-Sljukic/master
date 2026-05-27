"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("I can drive");

// //function declaration
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }
// const age1 = calcAge1(1994);

// //function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1994);

// //arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1994);

// console.log(age1, age2, age3);

// const yearsUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirementAge = 65;
//   return retirementAge - age;
// };
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1994);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}`;
// };
// console.log(yearsUntilRetirement(1994));

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const orangeJuice = fruitProcessor(0, 3);
// console.log(orangeJuice);
// const fruitJuice = fruitProcessor(2, 3);
// console.log(fruitJuice);

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1994);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge1(1994);
// console.log(age2);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440];

// const calcAge1 = function (birthYear) {
//   return 2037 - birthYear
// }

// // Arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear
// const age3 = calcAge3(1995)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2026 - birthYear
//   const retirement = 65 - age
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1994, "Pavle"))

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitePieces(apples);
//   const orangePieces = cutFruitePieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
//   return juice;
// }

// function cutFruitePieces(fruit) {
//   return fruit * 4;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} is already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1970, "Mike"));

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);

// const years = new Array(1992, 1992, 1995, 1991);
// console.log(friends[0]);

// console.log(years.indexOf(1991));
// console.log(years.pop());
// console.log(years.shift());
// console.log(years.push("test"));
// console.log(years.push(years));
// console.log(years);

// console.log(years.includes("test"));

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Sljukic",
//   age: 31,
//   friends: ["Sone", "Cone", "Laza"],
// };

// const nameKey = "Name";
// console.log(jonas.lastName);
// console.log(jonas["first" + nameKey]);

//chapter:02
//lesson:14

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`,
// );
//

// const jonas = {
//   firstName: "Pavle",
//   lastName: "Sljukic",
//   job: "QA Engineer",
//   birthYear: 1994,
//   friends: ["Sone", "Cone", "Laza"],
//   hasDriversLicense: true,

//   // calcAge: function () {
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.age}-year old ${this.job} and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
//   },
// };

// jonas.calcAge();
// console.log(jonas.age);
// console.log(jonas["age"]);
// console.log(jonas.getSummary());

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const dolphinsAverageScore1 = calcAverage(44, 23, 71);
// const koalasAverageScore1 = calcAverage(65, 54, 49);

// const dolphinsAverageScore2 = calcAverage(85, 54, 41);
// const koalasAverageScore2 = calcAverage(23, 34, 27);

// const checkWinner = (dolphinsScore, koalasScore) => {
//   if (dolphinsScore >= 2 * koalasScore) {
//     console.log(`Dolphins win (${dolphinsScore}:${koalasScore})`);
//   } else if (koalasScore >= 2 * dolphinsScore) {
//     console.log(`Koalas win (${koalasScore}:${dolphinsScore})`);
//   } else console.log("No one wins");
// };

// checkWinner(dolphinsAverageScore1, koalasAverageScore1);
// checkWinner(dolphinsAverageScore2, koalasAverageScore2);

// const calcTip = (bills) => {
//   const tips = []
//   for(let bill of bills) {
//   tips.push(bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
//   }
//   return tips;
// };

// const bills = [125, 555, 44];
// const tips = calcTip(bills);
// console.log(tips);

// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return (this.bmi = this.mass / this.height ** 2);
//   },
// };

// const Mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return (this.bmi = this.mass / this.height ** 2);
//   },
// };

// John.calcBMI();
// Mark.calcBMI();

// if (John.bmi > Mark.bmi) {
//   console.log(`John's BMI (${John.bmi}) is higher than Mark's (${Mark.bmi})!`);
// } else if (Mark.bmi > John.bmi) {
//   console.log(`Mark's BMI (${Mark.bmi}) is higher than John's (${John.bmi})!`);
// } else {
//   console.log(`They have the same BMI (${Mark.bmi})`);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`This is loop number ${i}`);
// }

// const newArray = [2, "Pavle", [1, 2, 3], 55.2];
// newArray.shift();
// newArray.unshift("novi prvi clan");

// for (let i = 0; i < newArray.length; i++) {
//   console.log(newArray[i], typeof newArray[i]);
// }

// let i = 0;

// while (i < newArray.length) {
//   console.log(newArray[i]);
//   i++;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [],
//   totals = [];
// const calcTip = (bill) => {
//   return bill <= 300 && bill >= 50 ? bill * 0.2 : bill * 0.15;
// };
// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + calcTip(bills[i]));
// }

// function averageBill(bills) {
//   let sum = 0;
//   for (let i = 0; i < bills.length; i++) {
//     sum += bills[i];
//   }
//   return sum / bills.length;
// }

// console.log(`Average is ${averageBill(bills)}`);
