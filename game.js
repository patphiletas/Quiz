
// On récupère le tableau 'questions' depuis le fichier questions.js
import { quiz_musique } from "./questions.js";
// let score = 0
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

currentQuestion.options.forEach(option => {
  const option_btn = document.createElement('button');

  option_btn.innerText = option;
  option_btn.classList.add('options');
  reponsePossible.appendChild(option_btn);
  option_btn.addEventListener('click', () =>{
    if(option === quiz_musique.questions){
      option_btn.style.backgroundColor = "green";
    }else{
      option_btn.style.backgroundColor ='red'
    }
  })
});

}
//  Ajouter un écouteur d'événements pour le bouton "Suivant"
loadQuestion()

nextButton.addEventListener('click', ()=> {
   // Incrémenter l'index de la question
currentQuestionIndex++


 // Vérifier s'il reste des questions
 if (currentQuestionIndex < quiz_musique.questions.length){
  loadQuestion();
 } else {
question.innerText = ' La Partie est terminée 🥳';  // Si plus de questions, indiquer la fin du quiz
options.innerHTML ='';  // Effacer les options
//  Cacher le bouton suivant
nextButton.style.display = 'none' 
replayButton.style.display = 'inline-block'
 }

})
function Rejouer (){


// Fonction pour réinitialiser le quiz
replayButton.addEventListener('click', () =>{
let currentQuestionIndex = 0
nextButton.style.display = 'inline-block'
replayButton.style.display = 'none'
loadQuestion()

})}

// function checkAnswer (){
//   const allButtons = options.querySelectorAll("button");
//   allButtons.addEventListener('click', () =>{
//     if(reponsePossible === currentQuestionIndex){
//   clickedButton.style.backgroundColor = "green"
// }else {
//   clickedButton.style.backgroundColor = 'red'
// }})



// }
// checkAnswer()
// Charger la première question au chargement de la page
// loadQuestion();


