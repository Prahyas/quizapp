const data = [
  {
    id: 1,
    question: 'Which of these fish is actually a fish?',
    answers: [
      { answer: 'swordfish', isCorrect: true },
      { answer: 'jellyfish', isCorrect: false },
      { answer: 'starfish', isCorrect: false },
      { answer: 'crayfish', isCorrect: false },
    ],
  },
  {
    id: 2,
    question: 'A flutter is a group of:',
    answers: [
      { answer: 'bees', isCorrect: false },
      { answer: 'penguins', isCorrect: false },
      { answer: 'butterflies', isCorrect: true },
      { answer: 'camels', isCorrect: false },
    ],
  },
  {
    id: 1,
    question: 'A group of which animals is referred to as a wake?',
    answers: [
      { answer: 'bats', isCorrect: false },
      { answer: 'vultures', isCorrect: true },
      { answer: 'ants', isCorrect: false },
      { answer: 'camels', isCorrect: false },
    ],
  },
];

const game = document.querySelector('.game');
const result = document.querySelector('.result');
const question = document.querySelector('.question');
const answers = document.querySelector('.answers');
const submit = document.querySelector('.submitbutton');
const play = document.querySelector('.playagainbutton');

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let selectedAnswer;

const showResultScreen = () => {
  result.style.display = 'block';
  game.style.display = 'none';

  result.querySelector(
    '.correct'
  ).textContent = `Correct Answer : ${correctCount}`;
  result.querySelector('.wrong').textContent = `Wrong Answer : ${wrongCount}`;
  result.querySelector('.score').textContent = `Score : ${correctCount * 10}`;
};

const showDetails = (qIndex) => {
  if (qIndex === data.length) return showResultScreen();
  selectedAnswer = null;
  question.innerHTML = `<h2>
  ${data[qIndex].question}
  </h2>`;
  answers.innerHTML = data[qIndex].answers
    .map(
      (item, i) =>
        `<div class="answer">
  <input type="radio" name="answer" id="${i}" value="${item.isCorrect}"/>
  <label for="${i}">${item.answer}</label>
</div>`
    )
    .join('');
  clickedAnswer();
};

const clickedAnswer = () => {
  answers.querySelectorAll('input').forEach((el) => {
    el.addEventListener('click', (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener('click', () => {
    if (selectedAnswer !== null) {
      selectedAnswer === 'true' ? correctCount++ : wrongCount++;
      qIndex++;
      showDetails(qIndex);
    } else alert('You have not selected a answer');
  });
};

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  showDetails(qIndex);
};

play.addEventListener('click', () => {
  result.style.display = 'none';
  game.style.display = 'block';
  playAgain();
});

showDetails(qIndex);
submitAnswer();
clickedAnswer();
