
// On récupère le tableau 'questions' depuis le fichier questions.js
import { quiz_musique } from "./questions.js";
let score = 0
let currentQuestionIndex =0;

const quizContainer = document.getElementById("quiz-container");
const textQuestion = document.getElementById("question-text");
const reponsePossible = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const replayButton = document.getElementById("replay-button");

const firstQuestion = quiz_musique.questions[0];
firstQuestion.innerText = textQuestion;



function loadQuestion(){
reponsePossible.innerHTML = '';
const currentQuestion = quiz_musique.questions[currentQuestionIndex];
textQuestion.innerText = currentQuestion.question
nextButton.disabled = true; // on désactive le bouton “Suivant” tant qu’aucune réponse n’est choisie
currentQuestion.options.forEach(option => {
  const option_btn = document.createElement('button');
  option_btn.disabled = false
})
nextButton.addEventListener('click', ()=> {
   // Incrémenter l'index de la question
currentQuestionIndex++
 // Vérifier s'il reste des questions
 if (currentQuestionIndex < quiz_musique.questions.length){
  loadQuestion();
 } else {
   options.innerHTML ='';  // Effacer les options
   question.innerText = ' La Partie est terminée 🥳';  // Si plus de questions, indiquer la fin du quiz
//  Cacher le bouton suivant
nextButton.style.display = 'none' 
replayButton.style.display = 'inline-block'
 }

})
}

  // option_btn.innerText = option;
  // option_btn.classList.add('options');
  // reponsePossible.appendChild(option_btn);
  // option_btn.addEventListener('click', () =>{

  //   if(option === currentQuestion.bonne_reponse){
  //     option_btn.style.backgroundColor = "green";
  //     score++
  //   }else{
  //     option_btn.style.backgroundColor ='red'
      
     
  //   }
  //   nextButton.disabled = false;  // Réactiver le bouton "Suivant" après le choix
  //   // on a recuperer tous les button est desactiver aussi,
  //   const allButtons = reponsePossible.querySelectorAll("button");
  //   allButtons.forEach((btn) => (btn.disabled = true))

    
    
   


//   })
// });

// }

//  Ajouter un écouteur d'événements pour le bouton "Suivant"
// loadQuestion()


function Rejouer (){


// Fonction pour réinitialiser le quiz
replayButton.addEventListener('click', () =>{
let currentQuestionIndex = 0
nextButton.style.display = 'inline-block'
replayButton.style.display = 'none'
loadQuestion()

})}

function checkAnswer(){
  option_btn.innerText = option;
  option_btn.classList.add('options');
  reponsePossible.appendChild(option_btn);
  option_btn.addEventListener('click', () =>{

    
    if(option === currentQuestion.bonne_reponse){
      option_btn.style.backgroundColor = "green";
      score++
    }else{
      option_btn.style.backgroundColor ='red'
      
     
    }
    
  })
  nextButton.disabled = false;  // Réactiver le bouton "Suivant" après le choix
  // on a recuperer tous les button est desactiver aussi,
  const allButtons = reponsePossible.querySelectorAll("button");
  allButtons.forEach((btn) => (btn.disabled = true))

}  


// function checkAnswer (){
//   const allButtons = options.querySelectorAll("button");
//   allButtons.addEventListener('click', () =>{
//     if(reponsePossible === currentQuestionIndex){
//   clickedButton.style.backgroundColor = "green"
// }else {
//   clickedButton.style.backgroundColor = 'red'
// }})



// }
checkAnswer();
// Charger la première question au chargement de la page
loadQuestion();


