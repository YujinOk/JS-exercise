/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);


console.log("Jonas");
console.log(23);

let firstName = "Jonas"
console.log(firstName)



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear =1990;
//const job;

var job = 'programmer';
job = 'teacher'


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3= 2* 2* 2

const firstName = 'Jonas';
const lastName = 'Ok'
console.log(firstName + ' ' + lastName);

// Assignment opperators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x+x*4 = 100
x++; // x= x+1
x--; //x = x-1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


const firstName = 'Jonas';
const job = ' teacher';
const birthYear = 1991;
const year = 2037;

const jonas = " I'm " + firstName + ', a ' + (year - birthYear) + 'year old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear}  year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('string with \n\
multiple \n\
lines');

console.log(`string
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 😀');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear + 18));

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0. ' ', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all ;");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! height is define');
} else {
    console.log('height is undefined');
}


const age = 18;
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { //'23'==23
    console.log('Cool!23 is an amazing number!')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7')
}

if (favorite !== 23) console.log('Why not 23?');


const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to dive')
// } else {
//     console.log('someone else should drive...');
// }

const isTired = false; //C
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}


const day = 'monday';

switch (day) {
    case 'monday'://day==='monday'
        console.log('Plan course structure');
        console.log('Go to conding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('Record videos');
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');

}

if (day === 'monday') {
    console.log('Plan course structure');
} else if (day === 'tuesday') {
    console.log('Go to coding meetup');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
}


3 + 4
1991
true && false && !false

if (23 < 10) {
    const str = '23 is bigger';
}


const age = 15;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water');// its 'else' part

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log('I like to drink ${age >= 18 ? 'wine' : 'water'}');


const frind1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0])
console.log(friends[2])

console.log(friends.length);//its not 0 base
console.log(friends[friends.length - 1]);// to retrieve an element [-1]

friends[2] = 'Jay';// can be used for also adding element
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Schemdtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));// tells where the element is in array

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

const jonasArray = [
    'Jonas',
    'Schmdtmann',
    2037 - 1991,
    'teacher',
    ['Michael', ' Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', ' Peter', 'Steven']
};

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', ' Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const namekey = 'Name';
console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey]);

const interestedIn = prompt('What do you want to know about Jonas? choose between firstName, lastName, age, job, and friends');

console.log(interestedIn);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@yujinok';
console.log(jonas);

// Challenge
// " Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstNamenas} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', ' Peter', 'Steven'],
    hasDriverLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} - year old${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`
    },
    returnFriends: function () {
        return `${this.firstName} has ${this.friends.length} friends. Their names are ${this.friends[0]}, ${this.friends[1]},${this.friends[2]}`
    }
};
console.log(jonas.returnFriends());

console.log(jonas.getSummary());

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}


const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];
// console.log(jonas[0])
// ...
// console.log(jonas[4])
//jonas[5] does NOT exist
for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array 
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array 
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('---ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}
// Break
console.log('---BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}

// Looping backwards
const jonas = [ 
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--); {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}`);
    }
}

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(` Lifting weight repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(` WHILE:Lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end..");
}

const messureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius:"),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// ARRAY methods "map"
let vals = [2, 4, 6, 8, 9];
console.log(vals);
vals = vals.map((x) => x * 2);
console.log(vals);

vals.map((x) => ({ number: x, numberTimesTwo: x * 2 }));


let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("jonas");
console.log(23);

let firstName = "Yujin";
console.log(firstName);

let myFirstJob = "Dance Instructor";
let myCurrentJob = "lab tech";
console.log(myCurrentJob);

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schemdtman";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x+10 = 25
x *= 4; // x = x*4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // math operation proceeds first before comparison operators

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = "jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + "years old" + job + "!";
console.log(jonas);
// template literals, strings
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(" String with \n\
multiple \n\
lines");

console.log(`string
multiple
lines`); // this is much easier than the code above. We can create multiple lines just by using template literals ``


const age = 15;
// const isOldEnouh = age >= 18;

// if (isOldEnouh) {
//   console.log("Sarah can start driving license 😊");
// }

if (age >= 18) {
  // this is a lot more common
  console.log("Sarah can start driving license 😊");
} else {
  const yearsLeft = 18 - age;
  console.log(` Sarah is too young. Wit another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


const hasDriverLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// const shouldDrive = hasDriverLicense && hasGoodVision;
// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = true; //C
console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}


const day = "thursday";

switch (
  day // day ==='monday'
) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
  case "friday":
    console.log("record videods");
    break;
  case " saturday":
  case " sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("record videods");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend!");
}


// Function Declaration (similar to variable declaration )
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Funtion Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);


function logger() {
  console.log("My name is Jonas");
}
logger(); // calling/ running/ invoking function

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); // this is going to be replaced by result which is "return" so we need to store into variables
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

function mathProcessor(n1, n2) {
  return n1 * n2;
}
const mathIsFun = mathProcessor(2, 4);
console.log(mathIsFun);


// Function declaration vs Expression
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const age1 = calcAge1(1991); // can call the function before function body or after for Function Declaration
console.log(age1);

// Function Expression (expression produces value thus we can store it into variables )
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

// const multiplyIsFun = function (n1, n2) {
//   return n1 * n2;
// };
// const number = multiplyIsFun(2, 4);
// console.log(number);


// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const multiplyIsFun = (n1, n2) => n1 * n2;
const number = multiplyIsFun(2, 4);
console.log(number);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retures in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
*/
