// === Importation des données ===
// On récupère le tableau 'questions' depuis le fichier questions.js
import { questions } from "./questions.js";

//variabes de suivi//

let numero = 0;
let score = 0;

// === Démarre le quiz ===
afficherQuestion();

//affiche question 
function afficherQuestion() {
  //récupère la question actuelle
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

    //fin du quiz : on affiche le score
    document.body.innerHTML = `
      <h2>🎉 Quiz terminé !</h2>
      <p>Ton score : ${score} / ${questions.length}</p>
    `;
  }
}
window.choisir = choisir;
window.suivant = suivant;