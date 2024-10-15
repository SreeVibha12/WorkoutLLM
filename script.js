document.addEventListener("DOMContentLoaded", function() {
    const exerciseList = document.getElementById("exercise-list");

    // Example exercise data
    const exercises = {
        bodyweight: ["Push Up", "Squat", "Lunge", "Plank", "Burpee"],
        dumbbell: ["Dumbbell Curl", "Dumbbell Press", "Dumbbell Row", "Dumbbell Squat", "Dumbbell Deadlift"],
        // Add other equipment exercises here
    };

    // Function to display exercises based on selected equipment
    function displayExercises(selectedEquipment) {
        exerciseList.innerHTML = ""; // Clear current exercises
        const selectedExercises = exercises[selectedEquipment];
        
        if (selectedExercises) {
            selectedExercises.forEach(exercise => {
                const li = document.createElement("li");
                li.textContent = exercise;
                exerciseList.appendChild(li);
            });
        }
    }

    // Equipment selection event listeners
    document.querySelectorAll('#equipment-selection input').forEach(input => {
        input.addEventListener('change', () => {
            displayExercises(input.value);
        });
    });
});
