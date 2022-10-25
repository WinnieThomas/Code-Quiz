var welcome = document.getElementById("welcome");
var quiz = document.getElementById("quiz");
var result = document.getElementById("result");


var options = document.getElementById("options");
var comment = document.getElementById("comment");

var startQuiz = document.getElementById("startQuiz");
var viewScore = document.getElementById("ViewScore");
var saveScore = document.getElementById("saveScore");
var playAgain = document.getElementById("playAgain");

var ScoreValue = document.getElementById("ScoreValue");

var timer = document.getElementById("timer");
var summary = document.getElementById("summary");
var countDown;
var score=0;
var currentQuestion=0;
var secondsLeft=0;
//to stop the game result is displayed
function StopGame(){
    clearInterval(countDown);

    timer.textContent="";
    quiz.classList.add("hidden");
    result.classList.remove("hidden");

    summary.textContent = "Your score is"+ score;
}

//saves score to localstorage
function SaveScore(e){
    var initials=document.getElementById("initials").value;
    if(initials!==""){
        localStorage.setItem(initials,score);
        document.getElementById("initials").value = "";
    }

}
function displayScore(e){
    window.location.href='score.html';
}

// when user selects the answer
function onSelectAnswer(e){
    var correctAnswer=questions[currentQuestion].answer;
    var userOption=e.target.textContent;
    if(correctAnswer===userOption){
        score++;
        displayMessage("Correct");
        
    }else{
        score--;
        displayMessage("Wrong");
    }
    currentQuestion++;
    if(currentQuestion===questions.length){
        StopGame();
       console.log("end game");
    }else{
        displayQuestions();
    }
    
}
//display correct or wrong
function displayMessage(msg){
    comment.textContent=msg;
    //set timer for the displaymessage function
    setTimeout(function(){
        comment.textContent='';
    },1000);
}


// to display questions

function displayQuestions(){
    //Increments to get next question
   
    console.log('Current question is'+ currentQuestion);
    //Checks whether the questions finished
    
    var question = questions[currentQuestion];
    document.getElementById("questions").textContent=question.title;
    //Clear any existing options
    options.innerHTML='';
    //Load through choices and outputs options
    for(var i=0; i < question.choices.length; i++){
        var option = document.createElement("button");
        option.textContent=question.choices[i];
        option.onclick=onSelectAnswer;
        option.classList.add("option");
        options.appendChild(option);
    }
}

//set timer to 75s and set timerinterval
function StartGame(){
    secondsLeft=75;/*initialises timer*/
   
    score=0;
    countDown=setInterval(function(){
    if(secondsLeft>=0){
        timer.textContent=secondsLeft;
    }else{
        StopGame();
    }
    secondsLeft--;
    },1000);

    welcome.classList.add("hidden");
    result.classList.add("hidden");
    quiz.classList.remove("hidden");

    displayQuestions();
    
}

startQuiz.addEventListener("click",StartGame);
saveScore.addEventListener("click",SaveScore);
playAgain.addEventListener("click",StartGame);
viewScore.addEventListener("click",displayScore);