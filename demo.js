function calculateBMI() {
    let weightInput = prompt("Enter your Weight in kg");
    let heightInput = prompt("Enter your Height on Cm");


    let weight = parseFloat(weightInput);
    let heightcm = parseFloat(heightInput);

    let height = heightcm / 100;

    let bmi = weight / (height * height);

    let category = '';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal weight';
    else if (bmi<30) category='Overweight';
    else category='Obesity';
    document.getElementById("result").innerHTML = `YOUR BMI IS : ${bmi.toFixed(2)} (${category})`;


}