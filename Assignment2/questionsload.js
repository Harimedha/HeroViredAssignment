const allQuestions = [
    
    {   
        questionTittle: "Arrays in JavaScript are defined by which of the following statements?", 
        choices: ["It is an ordered list of values", "It is an ordered list of objects", "pIt is an ordered list of stringeter", "It is an ordered list of functions"],
        correctAnswer:0
    },
    {   
        questionTittle: "Which of the following is not javascript data types?",
        choices: ["Null type", "Undefined type", " Number type", " Number type"],
        correctAnswer:3
    },
    {
        questionTittle: "Where is Client-side JavaScript code is embedded within HTML documents?",
        choices: ["A URL that uses the special javascript:code", "A URL that uses the special javascript:protocol York", "A URL that uses the special javascript:encoding", "A URL that uses the special javascript:stack"],
        correctAnswer:1
    },
    {   questionTittle: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        choices: ["Position", "Window", "Standard", "Location"],
        correctAnswer:1
    },
]
var score=0;
var currentQuestionn = 0;
const totalQuestions = allQuestions.length;

function firstQuestion(){
   
    var question=document.getElementById("question");
    question.innerHTML = allQuestions[this.currentQuestionn].questionTittle;
    createOptions();

}
function createQuestion(){


    for (var i=0; i < allQuestions[this.currentQuestionn].choices.length;i++){
        document.forms.radioAnswers.elements.choice[i].checked = false;
    }
    var question=document.getElementById("question");
    question.innerHTML = allQuestions[this.currentQuestionn].questionTittle;
    
    var currentScore  = document.getElementById("currentScore");
    currentScore.style.fontWeight='Bold';
    currentScore.innerHTML="<span>The current score is: "+ score +"</span>";

    var attemptedQuestion  = document.getElementById("attemptedQuestion");
    attemptedQuestion.className="question-attempt";
    attemptedQuestion.innerHTML="<span>You have attempted: "+ currentQuestionn + " no. of questions </span>";

    createOptions();
}
function createOptions(){
    for (var i = 0; i < allQuestions[this.currentQuestionn].choices.length; i++){
        var option=document.getElementById("radiolabel"+i);
            option.innerHTML=allQuestions[this.currentQuestionn].choices[i];
            
    }
}
function nextQuestion(){

    //calculating score of current question before moving to next question
    for (var i =0; i < allQuestions[this.currentQuestionn].choices.length; i++){    
        if (document.forms.radioAnswers.elements.choice[i].checked == true){
            var userAnswer = document.forms.radioAnswers.elements.choice[i].value;
            if (userAnswer == allQuestions[this.currentQuestionn].correctAnswer){
            this.score++;
            }
        }
    }
    this.currentQuestionn++;

    if (this.currentQuestionn==totalQuestions){         
        finalScore();       
    }
    else{
        createQuestion();
    }
    
}
function finalScore(){
    

    const questionDiv = document.getElementById("questions");   
    const question=document.getElementById("question"); 
    const scoretext=document.getElementById("currentScore");
    const attempttext=document.getElementById("attemptedQuestion");
    const sbtbutton = document.getElementById("Submit");
    const formtag=document.getElementById("answerList");
    
    scoretext.style.display = "none";     
    attempttext.style.display = "none";         
    formtag.style.display="none";
    sbtbutton.style.display="none"

    questionDiv.style.height= '120px';
    
    var resultdiv = document.createElement('div');
    resultdiv.id = 'container';  
    resultdiv.className="finalscoreText";
    resultdiv.innerHTML = "<span>You have answered "+ score + "/" + totalQuestions + " correctly </span>"
    questionDiv.appendChild(resultdiv);

    var reloadButton = document.createElement('button');
    reloadButton.id="reloadButton";
    reloadButton.className="reload-button";
    var reloadText = document.createTextNode("Reload");
    reloadButton.appendChild(reloadText);	 
    questionDiv.appendChild(reloadButton);

    document.getElementById("reloadButton").onclick = function(){

            document.getElementById("container").remove();
            document.getElementById("reloadButton").remove();            
           
            window.location = window.location.href;
            formtag.style.display="block";
            firstQuestion()
    }

}
window.onload= firstQuestion();
;


//onload : create first question with radio buttons


