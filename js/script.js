function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "PREGUNTA" + currentQuestionNumber + " de " + quiz.questions.length;
};

function showScores() {
var gameOverHTML = "<h1>Sos un cervecero Responsable?</h1>";
    gameOverHTML += "<h2 id='score'> Si el resultado es 3, sos un campeón: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

var questions = [
    new Question("Sos Menor de 18 años?", ["NO"], "NO"),
    new Question("Tenes 18 años o mas?", ["por Suerte", "no llego"], "por Suerte"),
    new Question("Con cuantas pintas de Cerveza podes conducir?", ["1", "2","3","10"], "1"),
    new Question("Sos de beber con moderación?",  ["SI", "NO"], "NO")
];


var quiz = new Quiz(questions);

populate();

function alerta() 
{
    alert("Sos Menor de Edad, No tenemos nada para vos");
       
}