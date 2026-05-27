'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,
};

const { name, openingHours } = restaurant;

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const menuItem of menu) {
//   console.log(menuItem);
// }

// for (const [num, el] of menu.entries()) {
//   console.log(num + 1, el);
// }

// console.log(name, openingHours);

// const players1 = [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
// ];

// const players2 = [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
// ];

// const [gk, ...fieldPlayers] = players1;

// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...players1, ...players2];

// console.log(allPlayers);

// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// console.log(playersFinal);

// const odds = {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
// };

// const { team1, x: draw, team2 } = odds;

// console.log(team1, draw, team2);

// const scored = [
//   'Lewandowski',
//   'Gnarby',
//   'Lewandowski',
//   'Hummels',
//   'Gnarby',
//   'Lewandowski',
//   'Gnarby',
//   'Hummels',
//   'Marko',
//   'Marko',
//   'Marko',
//   'Lewandowski',
//   'Marko',
// ];

// const printGoals = function (...scorers) {
//   let goals = [];
//   for (let i = 0; i < scorers.length; i++) {
//     goals[i] = 1;
//     for (let j = i + 1; j < scorers.length; j++) {
//       if (scorers[i] === scorers[j]) {
//         goals[i]++;
//         scorers.splice(j, 1);
//         j--;
//       }
//     }
//   }

//   for (let i = 0; i < scorers.length; i++) console.log(scorers[i], goals[i]);
// };
// printGoals(...scored);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// game.odds.team1 < game.odds.team2 && console.log(game.team1);
// game.odds.team1 > game.odds.team2 && console.log(game.team2);
