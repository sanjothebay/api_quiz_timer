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



document.getElementById("start").addEventListener("click", function(event){
    event.preventDefault();
    // need to add timer
// setTimeout(timeRanOut, 5000);

getQuestions();

document.getElementById("start").setAttribute("class", "hide")
document.getElementById("instructions").setAttribute("class", "hide")


});


var currentQustion = 0;
var currentAnswer = 0;
var CurrentHighScore =0;

function getQuestions (){
    var h1El = document.getElementById("titleQuiz");

    var choiceButton = document.getElementById("choiceButton");
    var getQuestions = questions[currentQustion];

    h1El.textContent = getQuestions.ask;

    for (var i = 0; i < getQuestions.answersToQuestions.length; i++); {
        var questionsAsked = getQuestions.answersToQuestions[i];
        
        var buttonEl = document.createElement("buttonEl");
        buttonEl.textContent = questionsAsked;
        choiceButton.appendChild(buttonEl);


        var h4El = document.getElementById("possibleAnswersList")

        var answerButton = document.getElementById("answerButton");
        var getAnswers = questions[currentAnswer];

        h4El.textContent = getAnswers.choices;
        
        for (var i = 0; i < getAnswers.answersToQuestions.length; i++); {
            var answersGiven = getAnswers.answersToQuestions[i];

            var answerButtonEl = document.createElement("answerButtonEl");
            answerButtonEl.textContent = answersGiven;
            answerButton.appendChild(answerButtonEl);

        };





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

