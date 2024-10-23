document.addEventListener("DOMContentLoaded", function() {
    const exerciseList = document.getElementById("exercise-list");
        const exercises = {
        bodyweight: {
            Chest: ["Push Up", "Dips"],
            Triceps: ["Diamond Push Up", "Tricep Dips"],
            Back: ["Inverted Row", "Superman"],
            Biceps: ["Chin Up", "Bodyweight Curls"],
            Shoulders: ["Pike Push Up", "Handstand Push Up"],
            Abs: ["Plank", "Hollow Body Hold"],
            Legs: ["Squat", "Lunge"],
            Core: ["Plank", "Mountain Climbers"],
            Cardio: ["Burpee", "Jumping Jack"],
            FullBody: ["Burpee", "Animal Flow"]
        },
        dumbbell: {
            Chest: ["Dumbbell Bench Press", "Dumbbell Fly"],
            Triceps: ["Dumbbell Tricep Extension", "Dumbbell Kickback"],
            Back: ["Dumbbell Bent Over Row", "Dumbbell Pullover"],
            Biceps: ["Dumbbell Curl", "Hammer Curl"],
            Shoulders: ["Dumbbell Shoulder Press", "Lateral Raise"],
            Abs: ["Dumbbell Russian Twist", "Dumbbell Side Bend"],
            Legs: ["Dumbbell Squat", "Dumbbell Deadlift"],
            Core: ["Dumbbell Plank Rows", "Dumbbell Side Plank"],
            Cardio: ["Dumbbell Thruster", "Dumbbell Snatch"],
            FullBody: ["Dumbbell Clean and Press", "Dumbbell Thruster"]
        },
        barbell: {
            Chest: ["Barbell Bench Press", "Barbell Incline Press"],
            Triceps: ["Close Grip Barbell Press", "Barbell Skull Crusher"],
            Back: ["Barbell Row", "Barbell Deadlift"],
            Biceps: ["Barbell Curl", "Reverse Grip Barbell Curl"],
            Shoulders: ["Barbell Shoulder Press", "Barbell Front Raise"],
            Abs: ["Barbell Rollout", "Barbell Overhead Sit-up"],
            Legs: ["Barbell Squat", "Barbell Lunges"],
            Core: ["Barbell Good Mornings", "Barbell Front Squat"],
            Cardio: ["Barbell Complex", "Barbell Thruster"],
            FullBody: ["Barbell Clean", "Barbell Snatch"]
        },
        kettlebell: {
            Chest: ["Kettlebell Floor Press", "Kettlebell Fly"],
            Triceps: ["Kettlebell Tricep Extension", "Kettlebell Kickback"],
            Back: ["Kettlebell Row", "Kettlebell Swing"],
            Biceps: ["Kettlebell Curl", "Kettlebell Hammer Curl"],
            Shoulders: ["Kettlebell Shoulder Press", "Kettlebell Lateral Raise"],
            Abs: ["Kettlebell Russian Twist", "Kettlebell Windmill"],
            Legs: ["Kettlebell Goblet Squat", "Kettlebell Deadlift"],
            Core: ["Kettlebell Plank Drag", "Kettlebell Side Bend"],
            Cardio: ["Kettlebell Swing", "Kettlebell Snatch"],
            FullBody: ["Kettlebell Clean and Press", "Kettlebell Complex"]
        },
        band: {
            Chest: ["Band Chest Press", "Band Fly"],
            Triceps: ["Band Tricep Extension", "Band Kickback"],
            Back: ["Band Pull Apart", "Band Row"],
            Biceps: ["Band Curl", "Band Hammer Curl"],
            Shoulders: ["Band Shoulder Press", "Band Lateral Raise"],
            Abs: ["Band Russian Twist", "Band Pallof Press"],
            Legs: ["Band Squat", "Band Deadlift"],
            Core: ["Band Resisted Plank", "Band Side Bend"],
            Cardio: ["Band High Knees", "Band Skaters"],
            FullBody: ["Band Thruster", "Band Complex"]
        },
        plate: {
            Chest: ["Plate Press", "Plate Fly"],
            Triceps: ["Plate Overhead Tricep Extension", "Plate Skull Crusher"],
            Back: ["Plate Row", "Plate Deadlift"],
            Biceps: ["Plate Curl", "Plate Hammer Curl"],
            Shoulders: ["Plate Shoulder Press", "Plate Lateral Raise"],
            Abs: ["Plate Russian Twist", "Plate Sit-Up"],
            Legs: ["Plate Squat", "Plate Lunges"],
            Core: ["Plate Good Morning", "Plate Side Bend"],
            Cardio: ["Plate Snatch", "Plate Thruster"],
            FullBody: ["Plate Complex", "Plate Clean and Press"]
        },
        pull_up_bar: {
            Chest: ["Chest to Bar Pull Up", "Weighted Pull Up"],
            Triceps: ["Close Grip Pull Up", "Dips on Bar"],
            Back: ["Pull Up", "Chin Up"],
            Biceps: ["Chin Up", "Isometric Hold"],
            Shoulders: ["Archer Pull Up", "L-sit Pull Up"],
            Abs: ["Hanging Leg Raise", "Hanging Knee Raise"],
            Legs: ["L-sit", "Leg Raise"],
            Core: ["Toes to Bar", "Hanging Side Crunch"],
            Cardio: ["Kipping Pull Up", "Dynamic Pull Up"],
            FullBody: ["Muscle Up", "Explosive Pull Up"]
        },
        bench: {
            Chest: ["Bench Press", "Incline Bench Press"],
            Triceps: ["Tricep Dips", "Close Grip Bench Press"],
            Back: ["Bench Row", "Bench Pull"],
            Biceps: ["Bench Curl", "Incline Dumbbell Curl"],
            Shoulders: ["Bench Press", "Dumbbell Shoulder Press"],
            Abs: ["Bench Sit-Up", "Bench Leg Raise"],
            Legs: ["Bench Squat", "Bench Step-Up"],
            Core: ["Bench Plank", "Bench Bicycle Crunch"],
            Cardio: ["Bench Jumps", "Step-Ups"],
            FullBody: ["Bench Clean and Press", "Bench Complex"]
        }
    };
     // Add an event listener for the "Start Workout" button
     document.addEventListener("DOMContentLoaded", function() {
        const startWorkoutButton = document.getElementById("start-workout-button");
    
        if (startWorkoutButton) {
            startWorkoutButton.addEventListener("click", function() {
                // Redirect to workout.html (Ensure this is the correct relative path)
                window.location.href = "workout.html";  // Adjust path if necessary
            });
        }
    });
    

    const equipmentCheckboxes = document.querySelectorAll("input[name='equipment']");
    const muscleCheckboxes = document.querySelectorAll("input[name='muscle']");

  // This function will handle the start workout button click
function startWorkout() {
    // You can also pass data to the next page if necessary using query parameters
    // Example: 'workout.html?equipment=bodyweight,muscle=Chest'
    
    // Navigate to the workout page (replace 'workout.html' with your target page)
    window.location.href = 'workout.html';
}

// Add an event listener to the start workout button
document.getElementById('start-workout-button').addEventListener('click', startWorkout);

// Function to save exercises, sets, and reps to localStorage
function saveExerciseData() {
    const exercises = document.querySelectorAll('#exercise-list li');
    const exerciseData = [];

    exercises.forEach(exercise => {
        const exerciseId = exercise.id;  // Assuming each exercise has a unique id
        const setsInput = exercise.querySelector('.sets-input');
        const repsInput = exercise.querySelector('.reps-input');

        // Store the id, sets, and reps in an object
        const exerciseInfo = {
            id: exerciseId,
            sets: setsInput.value,
            reps: repsInput.value
        };

        // Add the exercise info to the array
        exerciseData.push(exerciseInfo);
    });

    // Save the array of exercise data to localStorage
    localStorage.setItem('exerciseData', JSON.stringify(exerciseData));
}

// Function to load saved exercises, sets, and reps from localStorage
function loadExerciseData() {
    // Retrieve saved exercise data from localStorage
    const exerciseData = JSON.parse(localStorage.getItem('exerciseData')) || [];

    // Clear existing exercise list before loading
    const exerciseList = document.getElementById('exercise-list');
    exerciseList.innerHTML = '';

    // Restore the sets and reps values
    exerciseData.forEach(data => {
        // Create a new list item for the exercise
        const exerciseItem = document.createElement('li');
        exerciseItem.id = data.id; // Set the ID for the list item

        // Assuming you have some HTML structure for each exercise
        exerciseItem.innerHTML = `
            <span>${data.id}</span>
            <input type="number" class="sets-input" value="${data.sets}" placeholder="Sets" />
            <input type="number" class="reps-input" value="${data.reps}" placeholder="Reps" />
        `;

        // Append the exercise item to the exercise list
        exerciseList.appendChild(exerciseItem);
    });
}

// Call the loadExerciseData function when the page loads
window.onload = function () {
    // Load previously saved selections for equipment and muscles
    loadSelections();

    // Load previously saved sets and reps data
    loadExerciseData();

    // Add event listeners to save reps and sets whenever they are changed
    const allInputs = document.querySelectorAll('.sets-input, .reps-input');
    allInputs.forEach(input => {
        input.addEventListener('change', saveExerciseData);
    });

    // Save the equipment and muscle selections whenever changed
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', saveSelections);
    });
};


function filterExercises() {
    const selectedEquipment = Array.from(equipmentCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const selectedMuscles = Array.from(muscleCheckboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    exerciseList.innerHTML = ""; // Clear the current exercise list

    if (selectedEquipment.length > 0 && selectedMuscles.length > 0) {
        selectedEquipment.forEach(equipment => {
            selectedMuscles.forEach(muscle => {
                const exercisesForMuscle = exercises[equipment][muscle];
                if (exercisesForMuscle) {
                    exercisesForMuscle.forEach(exercise => {
                        const li = document.createElement("li");
                        li.className = "exercise-item";

                        // Create a div for the content inside the list item
                        const exerciseContentDiv = document.createElement("div");
                        exerciseContentDiv.className = "exercise-content";

                        // Create a span for the exercise name (left aligned)
                        const nameSpan = document.createElement("span");
                        nameSpan.className = "exercise-name";
                        nameSpan.innerHTML = `<strong>${exercise}</strong>`;

                        // Create a container for sets controls
                        const setsDiv = document.createElement("div");
                        setsDiv.className = "controls";
                        setsDiv.innerHTML = `Sets: <span class="set-count">1</span>`;

                        // Create buttons for sets
                        const setsMinus = document.createElement("button");
                        setsMinus.textContent = "-";
                        setsMinus.onclick = function() {
                            const setCountSpan = setsDiv.querySelector(".set-count");
                            let currentCount = parseInt(setCountSpan.textContent);
                            if (currentCount > 1) {
                                setCountSpan.textContent = currentCount - 1;
                            }
                        };

                        const setsPlus = document.createElement("button");
                        setsPlus.textContent = "+";
                        setsPlus.onclick = function() {
                            const setCountSpan = setsDiv.querySelector(".set-count");
                            let currentCount = parseInt(setCountSpan.textContent);
                            setCountSpan.textContent = currentCount + 1;
                        };

                        // Create a container for reps controls
                        const repsDiv = document.createElement("div");
                        repsDiv.className = "controls"; 
                        repsDiv.innerHTML = `Reps: <span class="rep-count">10</span>`;

                        // Create buttons for reps
                        const repsMinus = document.createElement("button");
                        repsMinus.textContent = "-";
                        repsMinus.onclick = function() {
                            const repCountSpan = repsDiv.querySelector(".rep-count");
                            let currentCount = parseInt(repCountSpan.textContent);
                            if (currentCount > 1) {
                                repCountSpan.textContent = currentCount - 1;
                            }
                        };

                        const repsPlus = document.createElement("button");
                        repsPlus.textContent = "+";
                        repsPlus.onclick = function() {
                            const repCountSpan = repsDiv.querySelector(".rep-count");
                            let currentCount = parseInt(repCountSpan.textContent);
                            repCountSpan.textContent = currentCount + 1;
                        };

                        // Create a delete button (right aligned)
                        const deleteButton = document.createElement("button");
                        deleteButton.textContent = "Delete";
                        deleteButton.classList.add("delete-btn");
                        deleteButton.onclick = function() {
                            exerciseList.removeChild(li); // Remove the list item
                        };

                        // Append controls to their respective divs
                        setsDiv.appendChild(setsMinus);
                        setsDiv.appendChild(setsPlus);
                        
                        repsDiv.appendChild(repsMinus);
                        repsDiv.appendChild(repsPlus);

                        // Append elements to the content div in the desired order
                        exerciseContentDiv.appendChild(nameSpan);   // Name on the left
                        exerciseContentDiv.appendChild(setsDiv);    // Sets next
                        exerciseContentDiv.appendChild(repsDiv);    // Reps after sets

                        // Append content div and delete button to the list item
                        li.appendChild(exerciseContentDiv);          // Content (left)
                        li.appendChild(deleteButton);                // Delete button (right)

                        // Append the list item to the exercise list
                        exerciseList.appendChild(li);
                    });
                }
            });
        });
    }
}

    // Event listeners for checkbox changes
    equipmentCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterExercises);
    });
    muscleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterExercises);
    });
});
