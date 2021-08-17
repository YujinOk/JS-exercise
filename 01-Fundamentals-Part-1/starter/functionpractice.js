// const hourlyRate = 24.43;
// const hoursPerDay = 7.6;
// const weeksPerMonth = 4;
// const monthsPerYear = 12;

// 1. how much do I make a day?
function dailyIncome(n1, n2) {
  return n1 * n2;
}
console.log(dailyIncome(24.43, 7.6));
// 2. how much do I make a month?
function perMonth(weeksPerMonth) {
  const montlyIncome = dailyIncome(24.43, 7.6) * weeksPerMonth;
  const income = `Yujin makes ${montlyIncome} per month`;
  return income;
}
console.log(perMonth(4));

// 3. how much do I make a year?
function perYear(monthsPerYear) {
  const yearlyIncome = perMonth(4) * monthsPerYear;
  return `Yujin makes ${yearlyIncome} per year`;
}
console.log(perYear(12));

// so functional concepts to get:
// Difference between a declaration and a call
// What are parameters
// What "return" means (you can return anything)

// const mathIsFun = function (n1, n2) {
//   return n1 * n2;
// };
// mathIsFun(2, 3);
