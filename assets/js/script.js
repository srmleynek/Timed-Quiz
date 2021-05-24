const startButton = document.getElementById('start-btn')
const introHide = document.getElementById('intro')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    introHide.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
}
  
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
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
  