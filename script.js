var startButton = document.querySelector(".start_btn");
var questionContainerElement= document.getElementById("question-container");
var questionElement= document.getElementById("question");
var answerButtonsElement= document.getElementById("answer-buttons");
var choicesButton=document.querySelector("#choices");
var TimeElement=document.querySelector("#timer");
var initials=document.getElementById("initials");
var submitButton=document.getElementById("submitbutton");
var playerInitials=document.getElementById("playerInitials");
var highScoresElement=document.getElementById("highScores");
var intro = document.querySelector("container");
var startTime= 75;
var time= 75;
var interval
var numberOfCorrectAnswers=0
var highScores=[]
 let currentQuestionIndex = 0
 
 
 startButton.addEventListener('click', startGame)
 submitButton.addEventListener('click',savescore)
 


 function showTime() {
TimeElement.innerHTML= time}


function startGame() {
    interval= setInterval(function()
    {
        time=time-1
        if (time>0){
            showTime()

            
        }
        else {
            endQuiz()



        }
        
}
    ,1000)
    console.log('Started')
    startButton.classList.add('hide')
    // intro.classList.remove("hide")
    questionContainerElement.classList.remove('hide')
    currentQuestionIndex = 0
    setNextQuestion()

}

function savescore() {
    console.log(numberOfCorrectAnswers,playerInitials.value)
    var scoreObject={ score:numberOfCorrectAnswers,initials:playerInitials.value}
    highScores.push(scoreObject)
    initials.classList.add('hide')
    highScoresElement.classList.remove('hide')
    showHighScores()





}
function showHighScores (){

    highScores.forEach(function(score)
    {
       var div=document.createElement("div")
       div.innerHTML=score.score+"-"+score.initials
       highScoresElement.appendChild(div)
        console.log(score)
    
    }



    )

}


function endQuiz () {
    questionContainerElement.classList.add('hide')
    questionElement.classList.add('hide')
    answerButtonsElement.classList.add('hide')
    choicesButton.classList.add('hide')
    TimeElement.classList.add('hide')
    console.log (numberOfCorrectAnswers)
    clearInterval(interval)
    initials.classList.remove('hide')
}




function setNextQuestion() {
     showQuestion (questions[currentQuestionIndex])
    


}

function showQuestion(question) {   
    var currentQuestion=questions[currentQuestionIndex]
    //debugger
    questionElement.innerText = question.question
    answerButtonsElement.innerHTML=""
    currentQuestion.choices.forEach(choice =>{
    const button = document.createElement ('button')
    button.classList.add('btn')
    button.setAttribute("value",choice)
    button.innerText = choice
    choicesButton.appendChild(button)
    console.log (currentQuestion.choices)
   // if (answer.correct){
        //button.database.correct= answer.correct

   // }
    button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}


function resetState(){ 
    //debugger
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
   var selectedButton = e.target.value
    //const correct = selectedVutton.dataset.correct
    //setStatusClass(document.body.correct)
    //Array.from(answerButtonsElement.children).forEach(button=> {
    //    setStastusClass(button, button.dataset.coreect)

    //})
    if (selectedButton === questions[currentQuestionIndex].answer)
        {
            
            console.log ("true")
            numberOfCorrectAnswers+=1
    }


        else 
        
        {
        console.log("wrong")
        time=time-10
    }

        currentQuestionIndex+=1
        if (currentQuestionIndex===questions.length)
        {
            endQuiz()

        }
        else {
           setNextQuestion()
        }
        
        
}


function setStatusClass(element, correct) {
    clearsetStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }  else {
    element.classList.add('worng')
    }
}  




var questions= [
    {
        question : 'Commonly used data types DO Not Include:',
        choices: [
             "strings", 
             "booleans",
             "alerts", 
             "numbers"
        ],
        answer:"alerts"
    }, 

    {
        question : 'The condition is an if/else statement is enclosed with:',
        choices: [
             "qutoess", "curly brackets","parenthesis", "square brackets"
        ],
        answer:"parenthesis"
    }, 

    {
        question : 'Array in JavaScript can be used to store:',
        choices: [
             "numbers and strings", "other arrays","booleans", "all of the above"
        ],
        answer:"all of the above"
    }, 

    {
        question : 'String values must be enclosed with ______ when being assigned to variables:',
        choices: [
             "commas", "curly brackets","quotes", "parenthesis"
        ],
        answer:"quotes"
    }, 

    {
        question : 'A very useful tool used during development and debuggng for printing content to the debugger is:',
        choices: [
             "Javascript", "terminal/bash","for loops", "console.log"
        ],
        answer:"console.log"
    }, 
    

     

    

]
