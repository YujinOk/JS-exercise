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
*/
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


