let weight = Number(prompt("Weight(kg): "));
let height = Number(prompt("Height(m): "));

let bmi = weight / (height * height);

let BMI = bmi.toFixed(1);

let message = "";

if (BMI < 18.5) {
    message = "Underweight";
} else if (BMI < 25.0) {
    message = "Normal";
} else if (BMI < 30.0) {
    message = "Overweight";
} else {
    message = "Obese";
}

document.getElementById("resultBMI").innerText = `BMI: ${BMI}, Interpretation: ${message}`;