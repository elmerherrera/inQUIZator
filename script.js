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