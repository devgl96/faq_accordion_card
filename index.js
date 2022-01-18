// Get the questions
const questions = document.querySelectorAll(".question p");

// Get arrows
const arrows = document.querySelectorAll(".question img");

// Get the answers
const answers = document.querySelectorAll(".answer");

// Add event listener to click in question
for(let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", (event) => {
    // console.log("In IF");
    if(!event.target.classList.contains("question-clicked")) {
      event.target.classList.add("question-clicked");
      answers[i].style.display = "block";
      arrows[i].classList.add("arrow-turn");
    } else {
      // console.log("In ELSE");
      event.target.classList.remove("question-clicked");
      answers[i].style.display = "none";
      arrows[i].classList.remove("arrow-turn");
    }
  });
}