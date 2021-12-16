function bmi(weight, height) {
    let userBMI = weight / (height ** 2);
    switch (true) {
        case userBMI <= 18.5: return 'Underweight';
            break;
        case userBMI <= 25.0: return 'Normal';
            break;
        case userBMI <= 30.0: return 'Overweight';
            break;
        case userBMI > 30.0: return 'Obese';
            break;
    }
}