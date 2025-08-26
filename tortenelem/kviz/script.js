// Jobb klikk, szöveg kijelölés és húzás tiltása
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());

let questions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const playView = document.getElementById('play-view');
const resultView = document.getElementById('result-view');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const explanationEl = document.getElementById('explanation');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const finalScoreEl = document.getElementById('final-score');
const resultsListEl = document.getElementById('results-list');
const restartBtn = document.getElementById('restart-btn');
const progressEl = document.getElementById('progress');

// Keverő függvény
function shuffleInPlace(arr){
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Kérdések véletlensorrendben + válaszok keverése
function buildRandomizedQuestions(){
  const qs = originalQuestions.map(q => ({
    question: q.question,
    options: [...q.options],
    answer: q.answer,
    explanation: q.explanation
  }));
  shuffleInPlace(qs);
  return qs.map(q => {
    const opts = [...q.options];
    const correctText = opts[q.answer];
    shuffleInPlace(opts);
    return {
      question: q.question,
      options: opts,
      answer: opts.indexOf(correctText),
      explanation: q.explanation
    };
  });
}

// Kvíz indítása
function startQuiz(){
  questions = buildRandomizedQuestions();
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  resultView.hidden = true;
  playView.hidden = false;
  loadQuestion();
}

// Kérdés betöltése
function loadQuestion(){
  const q = questions[currentQuestion];
  progressEl.textContent = `Kérdés ${currentQuestion + 1} / ${questions.length}`;
  optionsEl.innerHTML = '';
  explanationEl.textContent = '';
  questionEl.textContent = q.question;

  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = true;

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;

    const saved = userAnswers[currentQuestion];
    if (saved) {
      btn.disabled = true;
      if (idx === q.answer) btn.classList.add('correct');
      if (idx === saved.selected && saved.selected !== q.answer) btn.classList.add('wrong');
    } else {
      btn.addEventListener('click', () => checkAnswer(idx), { once:true });
    }

    optionsEl.appendChild(btn);
  });

  if (userAnswers[currentQuestion]) {
    explanationEl.textContent = q.explanation;
    nextBtn.disabled = false;
  }
}

// Válasz ellenőrzése
function checkAnswer(selectedIdx){
  const q = questions[currentQuestion];
  const buttons = optionsEl.querySelectorAll('button');

  buttons.forEach((btn, idx) => {
    if(idx === q.answer) btn.classList.add('correct');
    if(idx === selectedIdx && selectedIdx !== q.answer) btn.classList.add('wrong');
    btn.disabled = true;
  });

  explanationEl.textContent = q.explanation;

  const correct = selectedIdx === q.answer;
  if(correct) score++;

  userAnswers[currentQuestion] = {
    question: q.question,
    yourAnswer: q.options[selectedIdx],
    correctAnswer: q.options[q.answer],
    selected: selectedIdx,
    isCorrect: correct
  };

  nextBtn.disabled = false;
}

// Következő kérdés
nextBtn.addEventListener('click', () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResults();
  }
});

// Előző kérdés
prevBtn.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

// Eredmények megjelenítése
function showResults(){
  playView.hidden = true;
  resultView.hidden = false;

  const percent = Math.round((score / questions.length) * 100);
  finalScoreEl.textContent = `✅ Végeredmény: ${score} / ${questions.length} pont (${percent}%)`;

  resultsListEl.innerHTML = userAnswers.map((ans, i) => `
    <div class="result-item">
      <strong>${i+1}. ${ans.question}</strong><br/>
      <span class="your-answer">Te válaszod: ${ans.yourAnswer}</span><br/>
      <span class="correct-answer">Helyes válasz: ${ans.correctAnswer}</span>
    </div>
  `).join('');
}

// Újrakezdés
restartBtn.addEventListener('click', startQuiz);

// Indítás
startQuiz();
