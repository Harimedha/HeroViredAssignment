const allQuestions = [
    
    {   
        questionTittle: "Arrays in JavaScript are defined by which of the following statements?", 
        choices: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of stringeter", "It is an ordered list of functions"],
        correctAnswer:0
    },
    {   
        questionTittle: "Which of the following is not javascript data types?",
        choices: ["Null type", "Undefined type", " Number type", " Number type"],
        correctAnswer:3
    },
    {
        questionTittle: "Where is Client-side JavaScript code is embedded within HTML documents?",
        choices: ["A URL that uses the special javascript:code", "A URL that uses the special javascript:protocol", "A URL that uses the special javascript:encoding", "A URL that uses the special javascript:stack"],
        correctAnswer:1
    },
    {   questionTittle: "Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        choices: ["Position", "Window", "Standard", "Location"],
        correctAnswer:1
    },
    {
        questionTittle: 'What is ReactJs ?',
        choices: [
          'Open-source JavaScript back-end library',
          'JavaScript front-end library to create a database',
          'Free and open-source JavaScript front-end library',
          'None of the mentioned',
        ],
        correctAnswer: 2,
      },
]

var score=0;
var currentQuestionn = 0;
const totalQuestions = allQuestions.length;


function createQuestion(){

    var question=document.getElementById("question");
    question.innerHTML = allQuestions[this.currentQuestionn].questionTittle;

    for (var i=0; i < 4;i++){        
        let radioinput = document.getElementById("radio"+i);    
        radioinput.checked = false;
        let radioLabel=document.getElementById("radiolabel"+i);
        radioLabel.innerHTML=allQuestions[this.currentQuestionn].choices[i];
    }
    
}
function nextQuestion(){
    //calculating score of current question before moving to next question
    if((document.querySelector('input[type=radio][name=choice]:checked').value) == allQuestions[this.currentQuestionn].correctAnswer)
    this.score++;
    this.currentQuestionn++;  

    if (this.currentQuestionn==totalQuestions){         
        finalScore();       
    }
    else{
        createQuestion();
    }
    
}
function finalScore(){
    
  
    const quizcontainer = document.getElementById('quiz-container');  
    quizcontainer.replaceChildren();

    quizcontainer.style.height='65px';
    quizcontainer.style.paddingTop='none';
    quizcontainer.style.marginTop="15%"

    var finalScoreLabel = document.createElement('div');
    finalScoreLabel.id = 'finalScoreLabel';  
    finalScoreLabel.className="finalscoreLabel";
    finalScoreLabel.innerHTML = "<span>You have answered "+ score + "/" + totalQuestions + " correctly </span>"
   
    var reloadcontainer = document.createElement('div');
    var reloadButton = document.createElement('button');
    reloadButton.id="reloadButton";
    reloadButton.className="quiz-button";
    var reloadText = document.createTextNode("Reload");
    reloadButton.appendChild(reloadText);	
    reloadcontainer.appendChild(reloadButton); 

    quizcontainer.appendChild(finalScoreLabel);
    quizcontainer.appendChild(reloadButton);
    

    reloadButton.addEventListener('click' , () => {

        this.reloadButton.remove();
        this.finalScoreLabel.remove();
        window.location.reload();        
    })
 
}
window.onload=createQuestion();

//onload : create first question with radio buttons


