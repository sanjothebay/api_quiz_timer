// has to have.
// option to view high score 
// timer cound down 


// Title:
// Coding quiz Challenge 

// Try to answer the following code-related questions within the time
// limit. Keep in mind that incorrect answers will penalized your scoretime
// by ten seconds 


// question asked and choices and show if answer is wrong or right 

// Commonly use data type Do Not Include:
// 1.Strings 
// 2.Booleans 
// 3.Alerts    *
// 4.Numbers 

// The condition in an if / else statement is eclosed within __.
// 1. quotes
// 2.curlybraces
// 3.parenthises     *
// 4.square Brackets

// Arrays on JavaScript can be used to store ___.
// 1.numbers and strings 
// 2.others arrays
// 3.booleans
// 4.all of the above   *

// String values must be closed within when being assigned to a veriables. 
// 1.commas
// 2.curlybraces
// 3.quotes
// 4.parenthises    *


// A very useful tool ised during development and debugger for printing
// content to the debugger is.
// 1.JavaScript 
// 2.git terminal 
// 3.for loops 
// 4.consol.log    *


// show final score 
// and input for initials submit button 

// show high score with initails 
// with  able to clear and go back 


let theQuestionsList = [
    {questionsAsked:"Commonly use data type Do Not Include:", 
    theAnswerToQuestion: ["Strings", "Booleans","Alerts","Numbers"] , 
    theCorrectAnswers: "Alerts"},
    {questionsAsked:"The condition in an if / else statement is eclosed within __.:", 
    theAnswerToQuestion: ["quotes", "curlybraces","parenthises","square Brackets"] , 
    theCorrectAnswers: "parenthises"},
    {questionsAsked:"Arrays on JavaScript can be used to store ___.", 
    theAnswerToQuestion: ["numbers and strings", "others arrays","booleans","all of the above"], 
    theCorrectAnswers: "all of the above"},
    {questionsAsked:"String values must be closed within when being assigned to a veriables. ", 
    theAnswerToQuestion: ["commas", "curlybraces","quotes","parenthises"], 
    theCorrectAnswers: "curlybraces"},
    {questionsAsked:"String values must be closed within when being assigned to a veriables. ", 
    theAnswerToQuestion: ["JavaScript", "git terminal","for loops","consol.log"], 
    theCorrectAnswers: "consol.log"}

] //Correct answrs array



let theCurrentQuestionIndex = 0;
let theCurrentAnswer = 0;
let theCurrentHighScore = 0;
let theCurrentPossibleAnswer = "";
let theCurrentScore = 0;


document.getElementById("startButtonGame").addEventListener("click", function(event){
    event.preventDefault();
    // need to add timer
// setTimeout(timeRanOut, 5000);

document.getElementById("startButtonGame").setAttribute("class", "hide")
document.getElementById("instructionsForGame").setAttribute("class", "hide")
document.getElementById("questionsTextInput").setAttribute("class", "")

startGameQuestions();
});
// selection buttton zone 
let buttons = document.querySelector("#possibleAnswersList");
// create an event click for button zone
buttons.addEventListener("click", function(event){
    // click is a button 
    if (event.target.tagName === "BUTTON" ) {
        if (event.target.textContent == theCurrentPossibleAnswer ) {
         
        }
       
    }

});

function startGameQuestions(){


    let theQuestionGoingToBeAsked = document.getElementById("questionsTextInput");
    let theCurrentQuestion = theQuestionsList[theCurrentQuestionIndex];

    theQuestionGoingToBeAsked.textContent = theCurrentQuestion.questionsAsked;
    

    let thePossibleAnswersListEl = document.getElementById("possibleAnswersList");
    thePossibleAnswersListEl.innerHTML = "";
    for (let i = 0; i < theCurrentQuestion.theAnswerToQuestion.length; i++) {
         theCurrentPossibleAnswer = theCurrentQuestion.theAnswerToQuestion[i];
         console.log(theCurrentQuestion)
         

        let liEl = document.createElement("li")
        let buttonEl = document.createElement("button");
        buttonEl.textContent = theCurrentQuestion.theAnswerToQuestion[i];
        displayMessage.textContent = "";
        thePossibleAnswersListEl.appendChild(liEl);
        liEl.appendChild(buttonEl);

        // buttonEl.addEventListener("click", function (event) {
        // event.preventDefault()
    
    };
    };

    document.getElementById("possibleAnswersList").addEventListener("click", function(event) {
    event.preventDefault()

    console.log(event.target.innerText)
    console.log()
    let answerPicked = event.target.innerText;




    if (theQuestionsList[theCurrentQuestionIndex].theCorrectAnswers !== answerPicked) {
       displayMessage.textContent = "Wrong Answer!!!!"
        console.log(answerPicked)
        console.log("you are wrong")
    }
    else { (theQuestionsList[theCurrentQuestionIndex].theCorrectAnswers !== answerPicked )
        theCurrentScore++;
        theCurrentQuestionIndex ++ ;
        displayMessage.textContent = "Right Answer!!!!"
        startGameQuestions();
        
        
    }

    
});
// Keep track o score 
//  make a  HighScore  page 
// stor score to local storage 
// cteate a yoy win page 
// make a game over funtion  but everthing that happen during the game  Hide qustion and but score on screen 
// 
//
