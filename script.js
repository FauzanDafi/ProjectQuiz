const questions = [
  {
    question: "Apa ibukota Indonesia?",
    choices: ["Jakarta", "Surabaya", "Bandung", "Medan"],
    correctAnswer: 0,
  },
  {
    question: "Berapakah hasil dari 2 + 2?",
    choices: ["3", "4", "5", "6"],
    correctAnswer: 1,
  },
  {
    question: "Siapa penemu teori relativitas?",
    choices: [
      "Isaac Newton",
      "Albert Einstein",
      "Stephen Hawking",
      "Galileo Galilei",
    ],
    correctAnswer: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const questionText = document.getElementById("question-text");
  const choicesButtons = document.querySelectorAll(".choice");

  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    for (let i = 0; i < currentQuestion.choices.length; i++) {
      choicesButtons[i].textContent = currentQuestion.choices[i];
    }
  } else {
    questionText.textContent = "Quiz Selesai!";
    for (const button of choicesButtons) {
      button.style.display = "none";
    }
    document.getElementById(
      "result"
    ).textContent = `Skor Anda: ${score}/${questions.length}`;
  }
}

function checkAnswer(choiceIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  if (choiceIndex === currentQuestion.correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  displayQuestion();
}

displayQuestion();
