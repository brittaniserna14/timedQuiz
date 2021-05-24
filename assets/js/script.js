var timer = document.getElementById("timer");

var index = -1;
var counter = 5;
var questions = [
  {
    text: "1?",
    answers: ["a", "b", "c"],
    correctAnswer: "c",
  },
  {
    text: "2?",
    answers: ["x", "y", "z"],
    correctAnswer: "z",
  },
];
function nextQuestion() {
  index++;
  console.log("next question");
  console.log(questions[index].text);
  var currentQuestion = questions[index];
  for (let index = 0; index < currentQuestion.answers.length; index++) {
    const answer = currentQuestion.answers[index];
    console.log(answer);
  }
}
function submitAnswer(userAnswer) {
  var currentQuestion = questions[index];
  if (userAnswer === currentQuestion.correctAnswer) {
    alert("Good");
    nextQuestion();
  } else {
    alert("Bad");
  }
}
var countdown = setInterval(function () {
  counter--;
  timer.innerHTML = counter;
  if (counter <= 0) {
    clearInterval(countdown);
  }
}, 1000);
