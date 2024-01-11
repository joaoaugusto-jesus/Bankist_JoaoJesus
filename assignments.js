'use strict';

///# Challenge #1 Section 11

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀

// const dogsjulia = [3, 5, 2, 12, 7];
// const dogsKate = [9, 16, 6, 8, 3];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia;

//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const mergedAges = dogsJuliaCorrected.concat(dogsKate);

//   mergedAges.forEach(function (data, index) {
//     if (data > 3) {
//       console.log(
//         `Dog number ${index + 1} is an adult, and is ${data} years old`
//       );
//     } else {
//       console.log(`"Dog number ${index + 1} is still a puppy 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [3, 5, 2, 12, 7]);

// /*

// const kateData1 = [4, 1, 15, 8, 3];
// const kateData2 = [10, 5, 6, 1, 4];

// const dogAge = (function (juliaData1) {
//   juliaData1.forEach(function (data, i, arr) {
//     if(juliaData1>3) {console.log('The dog is an adult');
//   }
//   else {console.log('The dog is a puppy');
//   }
//   })
// };
// */

// // Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// // Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// // 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// // 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// // 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// // 4. Run the function for both test datasets

// // TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// // TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// // convert dog ages to human ages
// // calculate the average age of dogs
// /*
// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );
//   return average;
// };*/

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// /*
// /// Coding Challenge 3

// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

// const calcAverageHumanAge = ages => ages.map (age => ((age <= 2 ? 2 * age : 16 + age * 4) )).filter(age => age >= 18).reduce((acc, age, i, arr) => acc + age / arr.length, 0);  */
// //1
// const BankdepositSum = accounts
//   .flatmap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// //2
// // const numDeposit1000 = account
// //   .flatmap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;
// 0;
// const numDeposit1000 = accounts
//   .flatmap(acc => acc.movements)
//   // .reduce((count, curr) => (cur >= 1000 ? count + 1 : count), 0);
//   .reduce((count, curr) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposit1000); //Prefixed operator
// let a = 1;
// console.log(a++);
// console.log(a);

// //3
// const { deposits, withdrawal } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       //cur > 0 ? (sums.deposits += cur) : (sum.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },

//     { deposits: 0, withdrawal: 0 }
//   );
// console.log(deposits, withdrawals);

// //4
// // this is a nice title --> This Is A Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = str => word(0).toUpperCase() + str.slice(1);
//   const expectations = [
//     'a',
//     'an',
//     'and',
//     'the',
//     'but',
//     'or',
//     'on',
//     'in',
//     'with',
//   ];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.inclueds(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('This is a nice title'));
// console.log(convertTitleCase('This is a LONG title but not to long'));
// console.log(convertTitleCase('This is a nice title with an EXAMPLE'));
/*


//Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Challenge #4 with JOnas

//1.
dogs.forEach(dog => (dog.recFood = Math.trunc.dog.weight ** 0.75 * 28));
console.log(dogs);
//2.
dogSarah = dogs.find(dog => dog.owners.includes(Sarah));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too${
    dogsarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);
//3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatmap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatmap(dog => dog.owners);
console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooMuch.join}(' and ')'s eat too much!`);
console.log(`${ownersEatTooLittle.join}(' and ')'s eat too little!`);
///5
console.log(dogs.some(dog => dog.curFood === recFood));

///6
//current > recommended * 0.9 && current < recommended * 1.1;
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

///7
console.log(dogs.filter(checkEatingOkay));

///8
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);

/////Challengue 4 with MAuro
// = weight ** 0.75 * 28;
//1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
/*
let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

let anyDogEatingOk = false;
let doesnAnyDogEatExactly = false;

dogs.forEach(function (value, index, arr) {
  const recommendedFood = value.weight ** 0.75 * 28;
  value.recommendedFood = recommendedFood;

  const maxFood = recommendedFood + recommendedFood * 0.1;
  const minFood = recommendedFood - recommendedFood * 0.1;

  const dogEatsTooMuch = !(value.curFood <= maxFood);
  const dogEatsLess = !(value.curFood >= minFood);

  if (value.curFood === recommendedFood) {
    doesnAnyDogEatExactly = true;
  }

  if (dogEatsTooMuch) {
    value.owners.forEach(val => {
      ownersEatTooMuch.push(val);
    });

    //"Matilda and Alice and Bob's dogs eat too much!"
  } else if (dogEatsLess) {
    value.owners.forEach(val => {
      ownersEatTooLittle.push(val);
    });
  } else {
    anyDogEatingOk = true;
  }

  let isSarahsDog = value.owners.includes('Sarah');

  if (isSarahsDog) {
  }
});

let eatTooMuchInitialString = '';
let eatTooLittleInitialString = '';

ownersEatTooMuch.forEach((val, index, arr) => {
  const isLastIndex = index == arr.length - 1;

  if (isLastIndex) {
    eatTooMuchInitialString = eatTooMuchInitialString + val;
  } else {
    eatTooMuchInitialString = eatTooMuchInitialString + val + ' and ';
  }
});

ownersEatTooLittle.forEach((val, index, arr) => {
  const isLastIndex = index == arr.length - 1;

  if (isLastIndex) {
    eatTooLittleInitialString = eatTooLittleInitialString + val;
  } else {
    eatTooLittleInitialString = eatTooLittleInitialString + val + ' and ';
  }
});

console.log(eatTooMuchInitialString + 's dogs eat too much!');
console.log(eatTooLittleInitialString + 's dogs dont eat enough!');

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
console.log(anyDogEatingOk);
console.log(doesnAnyDogEatExactly);
*/
