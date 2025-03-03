function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (weight === "" || height === "" || weight <= 0 || height <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  height = height / 100; // Convert height to meters
  let bmi = (weight / Math.pow(height, 2)).toFixed(2);

  let resultText = `Your BMI is: ${bmi}`;
  let categoryText = "";

  if (bmi < 18.5) {
    categoryText = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    categoryText = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    categoryText = "Overweight";
  } else {
    categoryText = "Obese";
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById("category").textContent = `Category: ${categoryText}`;
}
