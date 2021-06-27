
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
*/

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