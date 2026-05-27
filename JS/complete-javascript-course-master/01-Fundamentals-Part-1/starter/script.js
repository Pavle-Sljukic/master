// const inputYear = "1991";
// console.log(Number(inputYear) + 18, inputYear);
// console.log(inputYear + 18);
// console.log(String(23), 23);

// console.log("I'm " + 23 + " years old");

// console.log(Boolean(55));
// console.log(Boolean("a"));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));

// const money = 10;

// if (money === "10") {
//   console.log("Don't spend it all");
// } else {
//   console.log("It's not 10");
// }

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && !hasGoodVision);
// console.log(!hasDriversLicense || !hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah should drive");
// } else {
//   console.log("Someone else should drive");
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

// const day = "sunday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//     console.log("Write code examples");
//     break;
//   case "thursday":
//     console.log("Record videos");
//     break;
//   case "friday":
//     console.log("Record videos");
//     console.log("Go to coding meetup");
//     break;
//   case "saturday":
//     console.log("Enjoy the weekend");
//     break;
//   case "sunday":
//     console.log("Relax and prepare for the week ahead");
//     break;
//   default:
//     console.log("Not a valid day!");
//     break;
// }
// {
//   const weightMark1 = 78;
//   const heightMark1 = 1.69;
//   const weightJohn1 = 92;
//   const heightJohn1 = 1.95;

//   const markBMI1 = weightMark1 / heightMark1 ** 2;
//   const johnBMI1 = weightJohn1 / heightJohn1 ** 2;

//   if (markBMI1 > johnBMI1) {
//     console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})`);
//   } else {
//     console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})`);
//   }

//   const weightMark2 = 95;
//   const heightMark2 = 1.88;
//   const weightJohn2 = 85;
//   const heightJohn2 = 1.76;

//   const markBMI2 = weightMark2 / heightMark2 ** 2;
//   const johnBMI2 = weightJohn2 / heightJohn2 ** 2;

//   if (markBMI2 > johnBMI2) {
//     console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})`);
//   } else {
//     console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})`);
//   }
// }
// const hasDriversLicense = true;
// const hasGoodVision = false;
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);

// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log(dolphinsAverage, koalasAverage);

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//   console.log("Dolphins are the winners");
// } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
//   console.log("Koalas are the winners");
// } else if (dolphinsAverage >= 100) {
//   console.log("It's a draw");
// } else {
//   console.log("No one wins");
// }

// const day = "subota";

// switch (day) {
//   case "ponedeljak":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "utorak":
//     console.log("Prepare theory videos");
//     break;
//   case "sreda":
//   case "cetvrtak":
//     console.log("Write code examples");
//     break;
//   case "petak":
//     console.log("Record videos");
//     break;
//   case "subota":
//     console.log("Rest day");
//     break;
//   case "nedelja":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day!");
//     break;
// }

// const age = 23;

// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";

// console.log(drink);

const billValue = 300;
const tip =
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(
  `Tip value is ${tip}, and tip percentage is ${(tip / billValue) * 100}`,
);
