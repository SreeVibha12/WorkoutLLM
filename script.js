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

    const equipmentCheckboxes = document.querySelectorAll("input[name='equipment']");
    const muscleCheckboxes = document.querySelectorAll("input[name='muscle']");
    
    function updateExerciseList() {
        exerciseList.innerHTML = ""; // Clear current list
        const selectedEquipment = Array.from(equipmentCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        const selectedMuscles = Array.from(muscleCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        // Loop through selected equipment and muscles to fetch exercises
        selectedEquipment.forEach(equipment => {
            selectedMuscles.forEach(muscle => {
                const muscleExercises = exercises[equipment][muscle];
                if (muscleExercises) {
                    muscleExercises.forEach(exercise => {
                        const listItem = document.createElement("li");
                        listItem.textContent = exercise;

                        // Create delete button
                        const deleteButton = document.createElement("button");
                        deleteButton.textContent = "Delete";
                        deleteButton.onclick = function () {
                            exerciseList.removeChild(listItem);
                        };

                        listItem.appendChild(deleteButton);
                        exerciseList.appendChild(listItem);
                    });
                }
            });
        });
    }

    equipmentCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateExerciseList);
    });

    muscleCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateExerciseList);
    });

    // Initial update to populate the exercise list
    updateExerciseList();
});
