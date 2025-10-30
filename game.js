// === Importation des données ===

// On récupère le tableau 'questions' depuis le fichier questions.js
import { questions } from "./questions.js";

//document.body.appenChild()


// === Variables de suivi ===
let numero = 0;
let score = 0;

// === Démarre le quiz ===
afficherQuestion();


function afficherQuestion() {
  //récupère la question actuelle
  let q = questions[numero];

  document.getElementById("question").textContent = q.question;
  document.getElementById("btn0").textContent = q.options[0];
  document.getElementById("btn1").textContent = q.options[1];
  document.getElementById("btn2").textContent = q.options[2];
  document.getElementById("btn3").textContent = q.options[3];
  document.getElementById("resultat").textContent = "";


  // Cache le bouton suivant
  document.getElementById("suivant").style.display = "none";

  // Réactiver les boutons
  const boutons = document.querySelectorAll(".option");
  boutons.forEach(btn => (btn.disabled = false));
 //document.body.appenChild(boutons)

 

}

// === Vérifie la réponse ===
function choisir(reponse) {
  let bonne = questions[numero].bonne;

  const boutons = document.querySelectorAll(".option");
  boutons.forEach(btn => (btn.disabled = true));
  //document.body.appenChild(boutons)

  if (reponse === bonne) {
    document.getElementById("resultat").textContent = "Bonne réponse 😎";
    score++;
  } else {
    document.getElementById("resultat").textContent = "Mauvaise réponse ☹️";
  }

  // Montre le bouton "suivant" dans tous les cas
  document.getElementById("suivant").style.display = "block";
}


// === Passe à la question suivante ===


function suivant() {
  numero++;
  if (numero < questions.length) {
    afficherQuestion();
  } else {
    document.body.innerHTML = `
      <h2>🎉 Quiz terminé !</h2>
      <p>Ton score : ${score} / ${questions.length}</p>
      <button id="debutquiz" onclick="suivant()">🔁 Recommencer le quiz</button>`
      document.body.appendChild(debutquiz);
      debutquiz.addEventListener("click", () => {
      location.reload();
      })
    }
  }

window.choisir = choisir;
window.suivant = suivant;
