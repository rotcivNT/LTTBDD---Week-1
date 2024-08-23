// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)

const markMillerProps = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / Math.pow(this.height, 2);
    }
}

const johnDoeProps = {
    fullName: "John Doe",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / Math.pow(this.height, 2);
    }
}


const millerBMI = markMillerProps.calcBMI();
const doeBMI = johnDoeProps.calcBMI();

if (millerBMI > doeBMI) {
    console.log(`${markMillerProps.fullName}'s BMI (${millerBMI.toFixed(1)}) is higher than ${johnDoeProps.fullName}'s (${doeBMI.toFixed(1)})!`);
} else if (millerBMI < doeBMI) {
    console.log(`${johnDoeProps.fullName}'s BMI (${doeBMI.toFixed(1)}) is higher than ${markMillerProps.fullName}'s (${millerBMI.toFixed(1)})!`);   

} else console.log("Equal !");
