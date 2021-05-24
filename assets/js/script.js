const startButton = document.getElementById('start-btn')
const introHide = document.getElementById('intro')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {

}

function setNextQuestion() {

}

function selectAnswer() {

}
const questions = [
    {
      question: 'Commonly used data types DO Not include:',
      answers: [
        { text: 'alerts', correct: true },
        { text: 'strings', correct: false },
        { text: 'booleans', correct: false },
        { text: 'numbers', correct: false }
      ]
    },
    {
      question: 'The condition in an if/else statement is enclosed with ______.',
      answers: [
        { text: 'quotes', correct: false },
        { text: 'parenthesis', correct: true },
        { text: 'curly brackets', correct: false },
        { text: 'square brackets', correct: false }
      ]
    },
    {
      question: 'Arrays in JavaScript can be used to store ______.',
      answers: [
        { text: 'numbers and strings', correct: false },
        { text: 'other arrays', correct: false },
        { text: 'all of the above', correct: true },
        { text: 'booleans', correct: false }
      ]
    },
    {
      question: 'String values must be enclosed within ______ when being assigned to variables.',
      answers: [
        { text: 'quotes', correct: true },
        { text: 'curly brackets', correct: false },
        { text: 'commas', correct: false },
        { text: 'parenthesis', correct: false }
      ]
    },
    {
      question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
      answers: [
        { text: 'javascript', correct: false },
        { text: 'console.log', correct: true },
        { text: 'terminal/bash', correct: false },
        { text: 'for loops', correct: false }
      ]
    }
  ]
  