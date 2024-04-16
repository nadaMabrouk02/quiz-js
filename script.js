/** @format */

const questions = [
  {
    question: "Why we use js?",
    answers: [
      { text: "to add interactivity", correct: true },
      { text: "to add style", correct: false },
      { text: "to allocate new objects on the heap", correct: false },
      { text: " to read by breaking ", correct: false },
    ],
  },
  {
    question: "Why we use css?",
    answers: [
      { text: "to add interactivity", correct: false },
      { text: "to add style", correct: true },
      { text: "to allocate new objects on the heap", correct: false },
      { text: " to read by breaking ", correct: false },
    ],
  },
  {
    question: "HTML stands for?",
    answers: [
      { text: "Hyper technology Markup Language", correct: false },
      { text: "Hyper Transfer Markup lan", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hexa Text Markup Language ", correct: false },
    ],
  },
  {
    question: "HTML used to?",
    answers: [
      { text: "to add more actions", correct: false },
      { text: "to transfer between pages", correct: false },
      { text: "to style", correct: false },
      { text: " to structure a web page and its content ", correct: true },
    ],
  },
  {
    question: "What Does a Front-End Developer Do?",
    answers: [
      { text: "nothing", correct: false },
      { text: "creates websites using web languages", correct: true },
      { text: "who build and maintain the mechanisms", correct: false },
      { text: " crafting app for mobile", correct: false },
    ],
  },
];
let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
  let selectBtn = e.target;
  let isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}.`;
  nextButton.innerHTML = "Start Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
