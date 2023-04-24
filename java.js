function calculateCalories() {
    // Get user inputs
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    // Calculate calories based on gender
    let calories = 0;
    if (gender === "male") {
        calories = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === "female") {
        calories = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Display result
    document.getElementById("calories").textContent = `${calories} calories`;
    document.getElementById("result").style.display = "block";
}