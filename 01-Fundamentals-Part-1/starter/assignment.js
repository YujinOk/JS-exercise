// let country = "south Korea"
// let continent = "Australia"
// let population = "52000000"
// console.log(country);

// const MarkWeight = 78;
// const MarkHeight = 1.69;

// const JohnWeight = 92;
// const JohnHeight = 1.95;

// const MarkBMI = MarkWeight / (MarkHeight * MarkHeight);
// const JohnBMI = JohnWeight / (JohnHeight * JohnHeight);
// const BMIhigher = MarkBMI > JohnBMI;

// console.log(MarkBMI, JohnBMI);
// console.log(MarkBMI > JohnBMI);

// if (MarkBMI > JohnBMI) {
//     console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
// } else {
//     console.log(`John's BMI(${JohnBMI}) is higher than Mark's(${MarkBMI})!`);
// }

// // BONUS 1
// const isdolphineScore = (96 + 108 + 89) / 3;
// const iskoalasScore = (88 + 91 + 110) / 3;

// console.log(isdolphineScore, iskoalasScore);

// if (isdolphineScore > iskoalasScore && isdolphineScore >= 100) {
//     console.log('winnder is Dolphines');
// } else if (iskoalasScore > isdolphineScore) {
//     console.log('winnder is Koalas');
// } else if (isdolphineScore === iskoalasScore) {
//     console.log('both win the trophy!');
// }

// const bills = (275 + 40 + 430) / 3
// console.log(bills)
// if (bills <= 50 && bills >= 300) {
//     tip = bills * 0.2;
//     console.log(tip);

// }

// const bill = 275;
// let tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * 0.2;
// console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// let tip;
// const bill = 275;
// if (bill <= 300 && bill >= 50) {
//     tip = bill * .15
// } else {
//     tip = bill * .2
// } console.log(tip)

// // Coding Challenge #1 my self
// const scoreDolphines1 = 44 + 23 + 71 / 3
// const scoreDolphines2 = 85 + 54 + 41 / 3
// const scoreKoalas1 = 65 + 54 + 49 / 3
// const scoreKoalas2 = 23 + 34 + 27 / 3

// const avgDophines = scoreDolphines1 + scoreDolphines2 / 2
// const avgKoalas = scoreKoalas1 + scoreKoalas2 / 2

// function calcAverage(avgDophines, avgKoalas) {
//     return calcAverage;
// }
// function checkWinner(calcAverage) {
//     if (avgDophines > avgKoalas) {
//         const scoreWinner = `${avgDophines}, is the winner!`
//         console.log('dolphine is winner')
//     } else {
//         const scoreWinner = `${avgKoalas}, is the winner!`
//         return checkWinner;
//     }
// }

// Coding Project solution

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.timeLog(calcAverage(3, 4, 5));

//Test1
const scoreDolphines = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphines, scoreKoalas);

const checkWinner = function (avgDophines, avgKoalas) {
    if (avgDophines >= 2 * avgKoalas) {
        console.log(`Dophins win (${avgDophines} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDophines) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDophines})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphines, scoreKoalas);

// Test 2
scoreDolphines = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphines, scoreKoalas);
checkWinner(scoreDolphines, scoreKoalas);
*/

// Coding Challenge #2 myself
/*
const bill = 100;
function calcTip(bill) {
    if (bill <= 50 && bill >= 300) {
        tip = .15 * bill
    } else {
        tip = .2 * bill
    } return calcTip
}
const tip = calcTip;

const bills [125, 555, 44];
const tip1 []


// Coding challenge #2 solution
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
//const calcTip = bill => bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);

console.log(bills, tips);


// Coding Challenge #3K myself
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI1: function () {
        return (this.mass / this.height) * 2;
    }
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95
    calcBMI2: function () {
        return (this.mass / this.height) * 2;
    }

}

// Coding Chllenge #3 solution
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;

    }

};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }

};
mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi})is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi})is higher than ${john.fullName}'s BMI (${john.bmi})`)
}


// Coding challenge #4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++);
{
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(tips);
console.log(totals);
console.log(calcTip);


let myCountry = "south Korea";
let myCountryPopulation = "52 million";

console.log(myCountry, myCountryPopulation);


// Coding Challenge 1
// 1. Store mark's and John's mass and height in variables
const markBMI1 = 78 / (1.69 * 1.69);
const markBMI2 = 95 / (1.88 * 1.88);
const markAverageBMI = (markBMI1 + markBMI2) / 2;

const johnBMI1 = 92 / 1.95 ** 2;
const johnBMI2 = 85 / 1.76 ** 2;
const johnAverageBMI = (johnBMI1 + johnBMI2) / 2;

// 2. calculate both their BMIs using the formula ( you can even implement both ersions)
// 3. Create a boolean variable ' markHigherBMI' CONTAINING INFORMATION ABOUT WHETHER mARK HAS A HIGHER BMI than John
//const markHigherBMI = true;
// solution :
const markHigherBMI = markAverageBMI > johnAverageBMI;


//1. Calculate the average score for each team, using the test dat below
const avgDolphines = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;

//2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well ( draw means they have the same average score).
if (avgDolphines > avgKoalas) {
  console.log("The winner is Dolphines!");
} else if (avgDolphines < avgKoalas) {
  console.log("The winner is Koalas");
} else if (avgDolphines === avgKoalas) {
  console.log("both win the trophy!");
}

// BONUS 1: Include a requirement for a minimum socre of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: use a logical operator to test for minimum socre, as well as multiple else- if blocks
const minimumScore = 100;
const dolphineScore = 97 + 112 + 101;
const koalasScore = 109 + 95 + 123;

const dolphineScoreAverage = dolphineScore / 3;
const koalasScoreAverage = koalasScore / 3;

if (
  dolphineScoreAverage > koalasScoreAverage &&
  dolphineScoreAverage >= minimumScore
) {
  console.log("The winnder is Dolphines");
} else if (
  koalasScoreAverage > dolphineScoreAverage &&
  koalasScoreAverage >= minimumScore
) {
  console.log("The winnder is Koalas");
} else if (
  dolphineScoreAverage === koalasScoreAverage &&
  dolphineScoreAverage >= minimumScore &&
  koalasScoreAverage >= minimumScore
) {
  console.log("No team wins the trophy");
}

// BONUS 2: Minimum score also applies to a draw! so a draw only happens when both teams have the same score and both have a score greater or equal 100 points. otherise, no team wins the trophy.
*/
// Coding Challenge #4
const bill = 275;

const calcTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${calcTip}, and the tal value ${
    bill + calcTip
  }`
);

// const bill = 275;
// if (bill >= 50 && bill <= 300) {
//   const calcTip = "${bill}" * 0.15;
// } else {
//   const calcTip = "${bill}" * 0.2;
// }
// console.log(calcTip);
