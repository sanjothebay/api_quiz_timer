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


var questions = [
    {ask:"Commonly use data type Do Not Include:", 
    choices: ["Strings", "Booleans","Alerts","Numbers"] , 
    answersToQuestions: "Alerts"},
    {ask:"The condition in an if / else statement is eclosed within __.:", 
    choices: ["quotes", "curlybraces","parenthises","square Brackets"] , 
    answersToQuestions: "parenthises"},
    {ask:"Arrays on JavaScript can be used to store ___.", 
    choices: ["numbers and strings", "others arrays","booleans","all of the above"] , 
    answersToQuestions: "parenthises"},
    {ask:"String values must be closed within when being assigned to a veriables. ", 
    choices: ["commas", "curlybraces","quotes","parenthises"] , 
    answersToQuestions: "parenthises"},
    {ask:"String values must be closed within when being assigned to a veriables. ", 
    choices: ["JavaScript", "git terminal","for loops","consol.log"] , 
    answersToQuestions: "consol.log"}

]

var currentQuestionIndex = 0;
var currentAnswer = 0;
var CurrentHighScore =0;


document.getElementById("startButton").addEventListener("click", function(event){
    event.preventDefault();
    // need to add timer
// setTimeout(timeRanOut, 5000);


document.getElementById("startButton").setAttribute("class", "hide")
document.getElementById("instructions").setAttribute("class", "hide")
document.getElementById("questionsText").setAttribute("class", "")

getQuestions();

});


function getQuestions (){

    var questionGoingToBeAsked = document.getElementById("questionsText");
    var currentQuestion = questions[currentQuestionIndex];

    questionGoingToBeAsked.textContent = currentQuestion.ask;

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var currentPossiableAnswer = currentQuestion.choices[i];
        
        var possibleAnswersListEl = document.getElementById("possibleAnswersList")
        var liEl = document.createElement("li")
        var buttonEl = document.createElement("button");
        buttonEl.textContent = currentPossiableAnswer;
        possibleAnswersListEl.appendChild(liEl);
        liEl.appendChild(buttonEl);
    

buttonEl.addEventListener("click", function (event) {
    event.preventDefault()


    if (currentQuestion.choices !== currentQuestion.ask,2) {
        alert("wrong")
        console.log(buttonEl)
        console.log(currentQuestion.choices,1)
    }
    
})











        // var getAnswers = questions[currentAnswer];
        // liEl.textContent = getAnswers.choices;

        // KNOW To know when user click event.listener for each button 
        // console.log(currentQuestion)
        // console.log(possibleAnswersListEl)
        // console.log(currentQuestion.choices,i)
    
    };
};
    
// add a form to teh Html for the list ???


// function renderTodos()  {
//   todoCountSpan.textContent = todos.length;
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];
    
//     var li = document.createElement("li");
//     li.textContent = todo;
//     todoList.appendChild(li);
//   }
// }
// renderTodos();





/*
see in 2:48 for the list to come out with the array 

.matches("button)

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

renderTodo
*/
    
// };
// function timeRanOut() {
//     alert("Time Ran Out!!!!");
// };

