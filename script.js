let theQuestionsList = [
  {
    questionsAsked: "Commonly use data type Do Not Include:",
    theAnswerToQuestion: ["Strings", "Booleans", "Alerts", "Numbers"],
    theCorrectAnswers: "Alerts",
  },
  {
    questionsAsked:
      "The condition in an if / else statement is eclosed within ______.",
    theAnswerToQuestion: [
      "quotes",
      "curlybraces",
      "parenthises",
      "square Brackets",
    ],
    theCorrectAnswers: "parenthises",
  },
  {
    questionsAsked: "Arrays on JavaScript can be used to store ___.",
    theAnswerToQuestion: [
      "numbers and strings",
      "others arrays",
      "booleans",
      "all of the above",
    ],
    theCorrectAnswers: "all of the above",
  },
  {
    questionsAsked:
      "String values must be closed within when being assigned to a veriables. ",
    theAnswerToQuestion: ["commas", "curlybraces", "quotes", "parenthises"],
    theCorrectAnswers: "curlybraces",
  },
  {
    questionsAsked:
      "A very useful tool used druing development and debugging for printing content to the debugger is:",
    theAnswerToQuestion: [
      "JavaScript",
      "git terminal",
      "for loops",
      "consol.log",
    ],
    theCorrectAnswers: "consol.log",
  },
]; //Correct answrs array

let counter = document.getElementById("counter");
let timeGauge = document.getElementById("timeGauge");
let progress = document.getElementById("progress");

let count = localStorage.getItem("count");
let initial = localStorage.getItem("initial");

let theCurrentQuestionIndex = 0;
let theCurrentAnswer = 0;
let theCurrentHighScore = 0;
let theCurrentPossibleAnswer = "";
let theCurrentScore = 0;
let questionTime = 120;

document
  .getElementById("startButtonGame")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // need to add timer
    // setTimeout(timeRanOut, 5000);

    document.getElementById("startButtonGame").setAttribute("class", "hide");
    document
      .getElementById("instructionsForGame")
      .setAttribute("class", "hide");
    document.getElementById("questionsTextInput").setAttribute("class", "");

    startGameQuestions();
  });
// selection buttton zone
let buttons = document.querySelector("#possibleAnswersList");
// create an event click for button zone
buttons.addEventListener("click", function (event) {

  // click is a button
  if (event.target.tagName === "BUTTON") {
    if (event.target.textContent == theCurrentPossibleAnswer) {
    }
  }
});

function startGameQuestions() {
    if (
        theCurrentQuestionIndex >= theQuestionsList.length
    ) {
      endQuiz();
    }
  localStorage.setItem("count", count);

  let theQuestionGoingToBeAsked = document.getElementById("questionsTextInput");
  let theCurrentQuestion = theQuestionsList[theCurrentQuestionIndex];

  theQuestionGoingToBeAsked.textContent = theCurrentQuestion.questionsAsked;

  let thePossibleAnswersListEl = document.getElementById("possibleAnswersList");
  thePossibleAnswersListEl.innerHTML = "";
  for (let i = 0; i < theCurrentQuestion.theAnswerToQuestion.length; i++) {
    theCurrentPossibleAnswer = theCurrentQuestion.theAnswerToQuestion[i];
    console.log(theCurrentQuestion);

    let liEl = document.createElement("li");
    let buttonEl = document.createElement("button");
    buttonEl.textContent = theCurrentQuestion.theAnswerToQuestion[i];
    displayMessage.textContent = "";
    thePossibleAnswersListEl.appendChild(liEl);
    liEl.appendChild(buttonEl);

    // buttonEl.addEventListener("click", function (event) {
    // event.preventDefault()
  }
}

document
  .getElementById("possibleAnswersList")
  .addEventListener("click", function (event) {
    event.preventDefault();

    console.log(event.target.innerText);
    console.log();
    let answerPicked = event.target.innerText;

    if (
      theQuestionsList[theCurrentQuestionIndex].theCorrectAnswers !==
      answerPicked
    ) {
      displayMessage.textContent = "Wrong Answer!!!!";
      console.log(answerPicked);
      console.log("you are wrong");
    } else {
      theQuestionsList[theCurrentQuestionIndex].theCorrectAnswers !==
        answerPicked;
      theCurrentScore++;
      theCurrentQuestionIndex++;
      displayMessage.textContent = "Right Answer!!!!";
      startGameQuestions();
    }

    // counter render
    renderCounter();
    function renderCounter() {
        console.log(theCurrentScore);
      if (theCurrentScore <= questionTime) {
        counter.innerHTML = theCurrentScore;
       // timeGauge.style.width = theCurrentScore * gaugeUnit + "px";
      } else {
        // change progress color to red
        //answerIsWrong();
        if (theCurrentQuestionIndex < theQuestionsList.length) {
            theCurrentQuestionIndex++;
          //renderQuestion();
        } else {
          // end the quiz and show the score
          clearInterval(TIMER);
          scoreRender();
        }
      }
    }
  });

// Keep track o score
//  make a  HighScore  page
function endQuiz() {
  window.location.href = "./html_Assets/allDonePage.html";
}

// stor score to local storage
// cteate a yoy win page
// make a game over funtion  but everthing that happen during the game  Hide qustion and but score on screen
//
//
