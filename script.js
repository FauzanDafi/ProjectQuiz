const questions1 = [
  {
    question1: "tanggal berapa indonesia merdeka?",
    answer: ["1445", "1945", "1888", "1956"],
    currentAnser: 1,
  },
  {
    question1: "kapan fiat menormalisasikan dolar?",
    answer: ["1445", "1945", "1881", "1972"],
    currentAnser: 3,
  },
  {
    question1: "mengapa penting sekarang belajar bahasa pemograman?",
    answer: ["ikut tren", "menyesuaikan zaman", "kebutuhan", "semua benar"],
    currentAnser: 3,
  },
  {
    question1: "type data apa yang menyimpan sebuah nilai yang banyak?",
    answer: ["aritmatika", "boolen", "variable", "array"],
    currentAnser: 3,
  },
  {
    question1: "type data apa yang menggunakan logika?",
    answer: ["aritmatika", "array", "variable", "boolen"],
    currentAnser: 3,
  },
];

const container1 = document.getElementById("container1");
const textContainer1 = document.getElementById("text-container1");
const text1 = document.getElementById("text1");
const choiceContainer = document.getElementById("choice-container1");
const buttonChoice = document.querySelectorAll(".choice1");
const result1 = document.getElementById("result1");
let currentQuestionIndex2 = 0;
let score2 = 0;

function displayQuestion1() {
  if (currentQuestionIndex2 < questions1.length) {
    const currentQuestion1 = questions1[currentQuestionIndex2];
    text1.textContent = currentQuestion1.question1;

    for (let i = 0; i < currentQuestion1.answer.length; i++) {
      buttonChoice[i].textContent = currentQuestion1.answer[i];
    }
  } else {
    text1.textContent = "Quiz Selesai!";
    for (const button of buttonChoice) {
      button.style.display = "none";
    }
    result1.textContent = `Skor Anda: ${score2}/${questions1.length}`;
  }
}

function checkAnswer(choice1Index) {
  const currentQuestion1 = questions1[currentQuestionIndex2];

  if (choice1Index === currentQuestion1.currentAnser) {
    score2++;
  }

  currentQuestionIndex2++;
  displayQuestion1();
}

displayQuestion1();
