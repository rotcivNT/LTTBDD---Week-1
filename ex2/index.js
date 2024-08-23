// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

const bmiOfMark = 78 / Math.pow(1.69, 2);
const bmiOfJohn = 92 / Math.pow(1.95, 2);

if (bmiOfMark > bmiOfJohn) {
    console.log(`Mark's BMI (${bmiOfMark.toFixed(1)}) is higher than John's (${bmiOfJohn.toFixed(1)})!`);
} else if (bmiOfMark < bmiOfMark) {
    console.log(`John's BMI (${bmiOfJohn.toFixed(1)}) is higher than Mark's (${bmiOfMark.toFixed(1)})!`);
} else {
    console.log("Both Mark and John have the same BMI.");
}