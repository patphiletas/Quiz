// === Les questions ===
const questions = [
  {
    question: "1️⃣ Quel guitariste a brûlé sa guitare à Monterey en 1967 ?",
    options: ["Jimi Hendrix", "Eric Clapton", "Jimmy Page", "Pete Townshend"],
    bonne: 0
  },
  {
    question: "2️⃣ Qui est le guitariste rythmique des Rolling Stones ?",
    options: ["Keith Richards", "Mick Taylor", "Ron Wood", "Brian Jones"],
    bonne: 0
  },
  {
    question: "3️⃣ Qui a joué le riff de 'Whole Lotta Love' ?",
    options: ["Jimmy Page", "Jeff Beck", "David Gilmour", "Carlos Santana"],
    bonne: 0
  },
  {
    question: "4️⃣ Quel guitariste du groupe Cream est surnommé 'Slowhand' ?",
    options: ["Eric Clapton", "Peter Green", "Rory Gallagher", "Jeff Beck"],
    bonne: 0
  },
  {
    question: "5️⃣ Qui chante 'Blowin’ in the Wind' ?",
    options: ["Bob Dylan", "Neil Young", "Joan Baez", "Simon & Garfunkel"],
    bonne: 0
  }
];

let numero = 0;
let score = 0;

// === Démarre le quiz ===
afficherQuestion();

function afficherQuestion() {
  let q = questions[numero];
  document.getElementById("question").textContent = q.question;
  document.getElementById("btn0").textContent = q.options[0];
  document.getElementById("btn1").textContent = q.options[1];
  document.getElementById("btn2").textContent = q.options[2];
  document.getElementById("btn3").textContent = q.options[3];
  document.getElementById("resultat").textContent = "";

}

function choisir(reponse) {
  let bonne = questions[numero].bonne;
  if (reponse === bonne) {
    document.getElementById("resultat").textContent = "✅ Bonne réponse !";
    score++;
  } else {
    document.getElementById("resultat").textContent = "❌ Mauvaise réponse.";
  }
}


function suivant() {
  numero++;
  if (numero < questions.length) {
    afficherQuestion();
  } else {
    document.body.innerHTML = `
      <h2>🎉 Quiz terminé !</h2>
      <p>Ton score : ${score} / ${questions.length}</p>
      <button id="debutquiz" onclick="suivant()">🔁 Recommencer le quiz</button>`
      document.body.append(debutquiz);
      debutquiz.addEventListener("click", () => {
      location.reload();
      })
    }
  }
