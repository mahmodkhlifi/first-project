var questions = [
    {
        question: "When was the album 'Not All Heroes Wear Capes' released?",
        answers: [
            { text: "2020", correct: false },
            { text: "2017", correct: false },
            { text: "2018", correct: true },
            { text: "2021", correct: false }
        ]
    },
    {
        question: "What is Tyler, the Creator's first album?",
        answers: [
            { text: "Bastard", correct: true },
            { text: "Call Me If You Get Lost", correct: false },
            { text: "Flower Boy", correct: false },
            { text: "Goblin", correct: false }
        ]
    },
    {
        question: "Who did Kendrick Lamar clash with in his track 'Not Like Us'?",
        answers: [
            { text: "Future", correct: false },
            { text: "Kanye West", correct: false },
            { text: "Lil Wayne", correct: false },
            { text: "Drake", correct: true }
        ]
    },
    {
        question: "Who founded Death Row Records?",
        answers: [
            { text: "2Pac", correct: false },
            { text: "Eminem", correct: false },
            { text: "Dr. Dre", correct: true },
            { text: "6ix9ine", correct: false }
        ]
    }
];

var currentQuestionIndex = 0;
var score = 0;


function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    
    
    document.getElementById('question').innerText = currentQuestion.question;

    
    var answerBtns = document.querySelectorAll('.answer-btn');
    currentQuestion.answers.forEach(function(answer, index) {
        answerBtns[index].innerText = answer.text;
        answerBtns[index].dataset.correct = answer.correct;
        answerBtns[index].disabled = false;  
        answerBtns[index].style.backgroundColor = '';  
    });

   
}


function checkAnswer(index) {
    var currentQuestion = questions[currentQuestionIndex];
    var selectedAnswer = document.querySelectorAll('.answer-btn')[index];

   
    if (selectedAnswer.dataset.correct === 'true') {
        score++;
        selectedAnswer.style.backgroundColor = '#28a745';
    } else {
        selectedAnswer.style.backgroundColor = '#dc3545'; 
    }

  
    var answerBtns = document.querySelectorAll('.answer-btn');
    answerBtns.forEach(function(btn) {
        btn.disabled = true;
    });


    document.getElementById('next-btn').style.display = 'inline-block';
}


function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        
        document.getElementById('quiz-box').style.display = 'none';
        document.getElementById('score-board').style.display = 'block';
        document.getElementById('score-board').innerText = "Your score: " + score + " / " + questions.length;
    }
}

showQuestion()