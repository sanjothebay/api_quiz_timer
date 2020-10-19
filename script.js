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
    {q:"Commonly use data type Do Not Include:", 
    c: ["Strings", "Booleans","Alerts","Numbers"] , 
    a: "Alerts"},
    {q:"The condition in an if / else statement is eclosed within __.:", 
    c: ["quotes", "curlybraces","parenthises","square Brackets"] , 
    a: "parenthises"},
    {q:"Arrays on JavaScript can be used to store ___.", 
    c: ["numbers and strings", "others arrays","booleans","all of the above"] , 
    a: "parenthises"},
    {q:"String values must be closed within when being assigned to a veriables. ", 
    c: ["commas", "curlybraces","quotes","parenthises"] , 
    a: "parenthises"},
    {q:"String values must be closed within when being assigned to a veriables. ", 
    c: ["JavaScript", "git terminal","for loops","consol.log"] , 
    a: "consol.log"}

]



document.getElementById("start").addEventListener("click", function(event){
// need to add timer
event.preventDefault();
setTimeout(timeRanOut, 5000);

getQuestions();

document.getElementById("start").setAttribute("class", "hide")

});


var currentqustion = 0;

function getQuestions (){
    var h3El = document.getElementById("titleQuiz");

    var answerbutton = document.getElementById("answerbutton");
    var getquestions = questions[currentqustion];

    h3El.textContent = getquestions.q;

    for (var i = 0; i < getquestions.a.length; i++); {
        var answers = getquestions.a[i];
        
        var buttonEl = document.createElement("buttonEl");
        buttonEl.textContent = answers;
        answerbutton.appendChild(buttonEl);



    }

    
}


function timeRanOut() {
    alert("Time Ran Out!!!!");
};



