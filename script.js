
const addGoalBtn = document.getElementById("addGoalBtn");
const goalPopup = document.getElementById("goalPopup");
const createGoalBtn = document.getElementById("createGoalBtn");
const closeGoalBtn = document.getElementById("closeGoalBtn");
const goalsList = document.getElementById("goalsList");


// Open Add Goal Popup

addGoalBtn.addEventListener("click", function(){

    goalPopup.style.display = "flex";

});



// Close Popup

closeGoalBtn.addEventListener("click", function(){

    goalPopup.style.display = "none";

});




// Create New Goal

createGoalBtn.addEventListener("click", function(){


    let goalName = document.getElementById("goalName").value.trim();

    let goalAmount = document.getElementById("goalAmount").value.trim();



    if(goalName === "" || goalAmount === ""){

        alert("Please fill all details");

        return;

    }



    let goal = document.createElement("div");

    goal.classList.add("goal");



    goal.innerHTML = `

        <div class="goal-top">

            <h3>${goalName}</h3>

            <span>$0 / $${goalAmount}</span>

        </div>


        <div class="goal-bar">

            <div class="laptop-progress"></div>

        </div>

    `;



    goalsList.appendChild(goal);



    // Clear Inputs

    document.getElementById("goalName").value = "";

    document.getElementById("goalAmount").value = "";



    // Close Popup

    goalPopup.style.display = "none";


});const addGoalBtn = document.getElementById("addGoalBtn");
const goalPopup = document.getElementById("goalPopup");
const createGoalBtn = document.getElementById("createGoalBtn");
const closeGoalBtn = document.getElementById("closeGoalBtn");
const goalsList = document.getElementById("goalsList");


// Open Add Goal Popup

addGoalBtn.addEventListener("click", function(){

    goalPopup.style.display = "flex";

});



// Close Popup

closeGoalBtn.addEventListener("click", function(){

    goalPopup.style.display = "none";

});




// Create New Goal

createGoalBtn.addEventListener("click", function(){


    let goalName = document.getElementById("goalName").value.trim();

    let goalAmount = document.getElementById("goalAmount").value.trim();



    if(goalName === "" || goalAmount === ""){

        alert("Please fill all details");

        return;

    }



    let goal = document.createElement("div");

    goal.classList.add("goal");



    goal.innerHTML = `

        <div class="goal-top">

            <h3>${goalName}</h3>

            <span>$0 / $${goalAmount}</span>

        </div>


        <div class="goal-bar">

            <div class="laptop-progress"></div>

        </div>

    `;



    goalsList.appendChild(goal);



    // Clear Inputs

    document.getElementById("goalName").value = "";

    document.getElementById("goalAmount").value = "";



    // Close Popup

    goalPopup.style.display = "none";


});
const addGoalBtn = document.getElementById("addGoalBtn");
const goalPopup = document.getElementById("goalPopup");
const createGoalBtn = document.getElementById("createGoalBtn");
const closeGoalBtn = document.getElementById("closeGoalBtn");
const goalsList = document.getElementById("goalsList");


// Open Popup
addGoalBtn.addEventListener("click", function () {

    goalPopup.style.display = "flex";

});


// Close Popup
closeGoalBtn.addEventListener("click", function () {

    goalPopup.style.display = "none";

});


// Create Goal
createGoalBtn.addEventListener("click", function () {


    let name = document.getElementById("goalName").value.trim();

    let amount = document.getElementById("goalAmount").value.trim();



    if(name === "" || amount === ""){

        alert("Please fill all details");
        return;

    }



    let newGoal = document.createElement("div");

    newGoal.classList.add("goal");



    newGoal.innerHTML = `

        <div class="goal-top">

            <h3>${name}</h3>

            <span>$0 / $${amount}</span>

        </div>


        <div class="goal-bar">

            <div class="laptop-progress"></div>

        </div>

    `;



    goalsList.appendChild(newGoal);



    // Clear inputs

    document.getElementById("goalName").value = "";

    document.getElementById("goalAmount").value = "";



    // Close popup

    goalPopup.style.display = "none";


});