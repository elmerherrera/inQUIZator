class Question {
    constructor (question, choices, answer){
        this.question = question 
        this.choices =  choices 
        this.answer = answer
    }
}

let timeRemaining = 60;

let timerInterval;

function startTimer() {
   timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimer();
    if (timeRemaining <= 0) {
        endQuiz();
    }
  }, 1000);
}

function updateTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.innerText = `Time remaining: ${timeRemaining} seconds`;
}

function startQuiz() {
    quiz.reset();
  timeRemaining = 60;
  updateTimer();
  score = 0;
  updateScore();
    document.getElementById("start-button").style.display = "none";
    document.getElementById("high-scores-button").style.display = "none"
    document.getElementById("quiz").style.display = "block";
    document.getElementById("high-scores").style.display = "none";
    startTimer();
    showCurrentQuestion();
  }

  function showHighScores() {
    document.getElementById("start-button").style.display = "block";
    document.getElementById("high-scores-button").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("high-scores").style.display = "block";
    updateHighScores();
  }

const question1 = new Question (
    'How many licks to the center of a tootsie pop _____',
    ['1','2','3','lets find out'],
    'lets find out'
)

const question2 = new Question (
    'How many ounces in a cup _____',
    ['6','8','12','16'],
    '8'
)

const question3 = new Question (
    'What year did star wars come out ____',
    ['2019','2003','1977','1984'],
    '1977'
)

const question4 = new Question (
    'Can you hear the difference in cold and hot water?',
    ['yes','no','maybe','no comment'],
    'yes'
)

const question5 = new Question (
    'Which would be the correct way to set a boolean in Javascript',
    ['var x = "true"', 'x = TRUE', 'var x = "false"', 'var x = false'],
    'var x = false'
)

class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.currentIndex = 0;
    }

    getCurrentQuestion() {
      return this.questions[this.currentIndex];
    }

    nextQuestion() {
      this.currentIndex++;
    }

    hasEnded() {
      return this.currentIndex >= this.questions.length;
    }
    reset() {
        this.currentIndex = 0;
    }

  }

  let quiz = new Quiz([question1, question2, question3, question4, question5])

  function showCurrentQuestion() {
    const question = quiz.getCurrentQuestion();
    const questionElement = document.getElementById("question");
    questionElement.innerText = question.question;

    const choices = question.choices;
    for (let i = 0; i < choices.length; i++) {
      const choiceElement = document.getElementById(`choice${i}`);
      choiceElement.innerText = choices[i];
    }
  }

  let score = 0;

  function checkAnswer(selectedChoice) {
    if (selectedChoice === quiz.getCurrentQuestion().answer) {
      score += 20;
    } else {
      score -= 20;
      timeRemaining -= 15;
    }
    updateTimer();
    showNextQuestion();
    updateScore();
  }

  function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = `Score: ${score}`;
  }

  function showNextQuestion() {
    quiz.nextQuestion();
    if (quiz.hasEnded()) {
            endQuiz();
    }
    showCurrentQuestion();
  }

  function endQuiz() {
    clearInterval(timerInterval);
    const initials = prompt("Enter your initials:");
    if (initials) {
      const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      highScores.push({ initials, score });
      localStorage.setItem("highScores", JSON.stringify(highScores));
    }
    alert("Quiz ended!");
    document.getElementById("high-scores-button").style.display = "block";
  }

  function updateHighScores() {
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.sort((a, b) => b.score - a.score);
    const highScoresElement = document.getElementById("high-scores");
    highScoresElement.innerHTML = "";
    for (const { initials, score } of highScores) {
      const li = document.createElement("li");
      li.innerText = `${initials}: ${score}`;
      highScoresElement.appendChild(li);
    }
  }