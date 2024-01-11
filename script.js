'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, //
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    // .reduce((acc, mov) => acc - mov, 0);
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);
////// Computing Usernames

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner;
  });
  const username = user
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
};

createUserNames('accounts');

const updateUi = function (acc) {
  //DISPLAY MOVEMENTS
  displayMovements(acc.movements);
  //DISPLAY BALANCE
  calcDisplayBalance(acc);
  //DISPLAY SUMMARY
  calcDisplaySummary(acc);
};
///EVENT HANDLER

let = currentAccount;

btnLogin.addEventListener('click', function (e) {
  //Prevent from submitting
  e.preventDefault();
  console.log('LOGIN');

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    /// Display UI and Welcome message
    labelWelcome.textContent = `Welocome back, ${
      (currentAccount.owner.split(' '), [0])
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //UPDATE UI
    updateUi(currentAccount);
  }
});

btnTransfer.addEventeListerner('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movemnts.push(-amount);
    receiverAcc.movements.push(amount);
    //UPDATE UI
    updateUi(currentAccount);
  }
  console.log('Transfer Valid');
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && current.movements.some(mov => mov >= amount / 0.1)) {
    //ADD a movement~
    currentAccount.movements.push(amount);
    // Update the UI
    updateUi(currentAccount);
  }
  inputLoanAmount = '';
});

btnClose.addEventeListerner('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //.indexOf(23)

    //Delete account
    accounts.splice(index, 1);
    // HIDE UI
    constainerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movemets, !sorted);
  sorted = !sorted;
});

// const euroToUsd = 1.1;
//PIPELINE
/*
const totalDepositsUsd = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * euroToUsd;
  })

  // .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUsd);

//// Find METHOD (loops over the array and retrive an element of the array)
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//// FOR EACH LOOP
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}, ${value}`);
});
//////FOR EACH LOOP

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${1 + 1}: You deposite ${movement}`);
  } else {
    console.log(`Movement ${1 + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---------FOR EACH-----------');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${1 + 1} You deposite ${mov}`);
  } else {
    console.log(`Movement ${1 + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
console.log('--------MAP-----------');

//MAP
const newMovements = movements.map(function (value) {
  return value + 1;
});

//FILTER
const filteredMovements = movements.filter(function (value) {
  return value > 300;
});

console.log(filteredMovements);

//  0: function(200)
//  1: function(450)
//  2: function(400)
//  ...

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

/// GETTING LAST ARRAY ELEMENT
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
// also works with strings
const str = ['Joni', 'Augusto', 'Jesus'];
console.log(str.at(-1));

/////////////////////////////////////////////////
/// SLICE
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);

/// SPLICE
console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

/// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

/// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr]);

/// JOIN
console.log(letters.join(' - '));


//// MAP METHOD
const euroToUsd = 1.1;

//  const movementsUsd = movements.map(function (mov) {   return mov * euroToUsd;
//  });

/// Arrow function
const movementsUsd = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUsd);
/// Example of for loop, same resulat as Map
const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov + euroToUsd);
console.log(movementsUsd);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'} ${Math.abs(
      mov
    )}`
);

//// THE FILTER METHOD
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

const withdrawal = movements.filter(mov => mov < 0);
console.log(withdrawal);

//// THE REDUCE METHOD

console.log(movements);

//ACCUMULATOR => SNOWBALL SUM
//   const balance = movements.reduce(function (acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`)
//     return acc + cur
//  , 0
//   }

const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);




console.log(movements);

//Equality
console.log(movements.includes(-130));

//  SOME: Condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(accounts4.movements.every(mov => mov > 0));

// SEPARET CALLBACK

const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat);

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.mov);
console.log(accountMovements);

// Flat
const overalBalance = accounta
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//FlatMAP
const overalBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
/*
/// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

//return < 0, A, B (keep order)
//return > 0, B, A  (switch order)
//Ascending order
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
movements.sort((a, b) => a - b);
//Descending order
// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (b > a) return 1;
// // });
movements.sort((a, b) => b - a);
console.log(movements);
*/
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// Array constructer function

const x = new Array(7);
console.log(x);
// console.log(x.map(() =>5));
// x.fill(1);
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements_value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI.map);
});

///Also cretes the Array bur then have to do the mapping
movementsUI2 = [...document.querySelectorAll('.movements_value')];
