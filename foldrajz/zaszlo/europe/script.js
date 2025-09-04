let current = 0;
let score = 0;
const userAnswers = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const explanationEl = document.getElementById("explanation");
const progressEl = document.getElementById("progress");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const playView = document.getElementById("play-view");
const resultView = document.getElementById("result-view");
const scoreEl = document.getElementById("score");
const resultsEl = document.getElementById("results");

// Gombok feliratának frissítése nyilakkal
function updateNavButtons() {
  prevBtn.innerHTML = "⬅ Előző";
  nextBtn.innerHTML = current === quizData.length - 1 ? "Eredmény ➡" : "Következő ➡";
}

// Kérdés betöltése
function loadQuestion(index) {
  const q = quizData[index];
  const selected = userAnswers[index];

  questionEl.innerHTML = `
    ${q.question}
    <div style="text-align:center; margin-top:12px;">
      <img src="${q.image}" alt="Zászló" loading="lazy" 
        style="width:350px; max-width:90%; height:auto; border-radius:8px; border: 2px solid #ccc; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
    </div>
  `;

  optionsEl.innerHTML = "";
  explanationEl.textContent = "";
  progressEl.textContent = `Kérdés ${index + 1} / ${quizData.length}`;
  progressEl.style.display = "block"; // mindig látszik játék közben

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => selectAnswer(i));
    optionsEl.appendChild(btn);
  });

  prevBtn.disabled = index === 0;
  updateNavButtons();

  if (selected !== undefined) {
    revealCorrectness(q, selected);
    nextBtn.disabled = false;
  } else {
    nextBtn.disabled = true;
  }
}

// Válasz kiválasztása
function selectAnswer(selected) {
  if (userAnswers[current] !== undefined) return;

  const q = quizData[current];
  userAnswers[current] = selected;

  revealCorrectness(q, selected);
  nextBtn.disabled = false;
}

// Helyes válasz megjelenítése
function revealCorrectness(q, selected) {
  const buttons = optionsEl.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    else if (i === selected) btn.classList.add("wrong");
  });

  explanationEl.textContent = q.explanation || "";
}

// Eredmények megjelenítése
function showResults() {
  score = userAnswers.reduce((sum, ans, i) => {
    return sum + (ans === quizData[i].correct ? 1 : 0);
  }, 0);

  const percent = Math.round((score / quizData.length) * 100);

  playView.hidden = true;
  resultView.hidden = false;

  // Számláló elrejtése az eredmény nézetben
  progressEl.style.display = "none";

  // Új formátumú eredmény kiírás
  scoreEl.innerHTML = `Végeredmény: ${score} / ${quizData.length} pont (${percent}%)`;
  resultsEl.innerHTML = "";

  quizData.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "result-item";
    const your = userAnswers[i] !== undefined ? q.options[userAnswers[i]] : "—";
    div.innerHTML = `
      <strong>${i + 1}. kérdés: ${q.question}</strong>
      <div style="text-align:center; margin:8px 0;">
        <img src="${q.image}" alt="Zászló" 
          style="width:350px; max-width:90%; height:auto; border-radius:8px; border: 2px solid #ccc; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
      </div>
      <span class="your-answer">Te válaszod: ${your}</span><br>
      <span class="correct-answer">Helyes válasz: ${q.options[q.correct]}</span>
    `;
    resultsEl.appendChild(div);
  });
}

// Újrakezdés
function restartQuiz() {
  current = 0;
  score = 0;
  userAnswers.length = 0;
  resultsEl.innerHTML = "";
  resultView.hidden = true;
  playView.hidden = false;
  loadQuestion(current);
}

// Navigációs gombok
nextBtn.addEventListener("click", () => {
  if (current < quizData.length - 1) {
    current++;
    loadQuestion(current);
  } else {
    showResults();
  }
});

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    loadQuestion(current);
  }
});

window.restartQuiz = restartQuiz;

// Indítás
loadQuestion(current);
