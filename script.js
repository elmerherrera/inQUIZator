class Question {
    constructor (question, choices, answer){
        this.question = question 
        this.choices =  choices 
        this.answer = answer
    }
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
      score += 12.5;
    } else {
      score -= 12.5;
    }
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
      alert("Quiz has ended!");
      return;
    }
    showCurrentQuestion();
  }

  showCurrentQuestion();