// week1 js ex1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Test data 1
{
    const bmiOfMark = 78 / Math.pow(1.69, 2);
    const bmiOfJohn = 92 / Math.pow(1.95, 2);

    const markHigherBMI = bmiOfMark > bmiOfJohn;

    console.log("Test data 1:", markHigherBMI);
}

// Test data 2
{
    const bmiOfMark = 95 / Math.pow(1.88, 2);
    const bmiOfJohn = 85 / Math.pow(1.76, 2);

    const markHigherBMI = bmiOfMark > bmiOfJohn;

    console.log("Test data 2:", markHigherBMI);
}
