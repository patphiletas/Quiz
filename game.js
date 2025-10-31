
// On récupère le tableau 'questions' depuis le fichier questions.js
import { quiz_musique } from "./questions.js";
let currentQuestionIndex =0;


const textQuestion = document.getElementById("question-text")
const reponsePossible = document.getElementById("options-container")
const nextButton = document.getElementById("next-button");

const firstQuestion = quiz_musique.questions[0];
firstQuestion.innerText = textQuestion;



function loadQuestion(){
textQuestion.innerHTML = '';
const currentQuestion = quiz_musique.questions[currentQuestionIndex];
textQuestion.innerText = currentQuestion.question

currentQuestion.options.forEach(option => {
  const option_btn = document.createElement('button');

  option_btn.innerText = option;
  option_btn.classList.add('options');
  reponsePossible.appendChild(option_btn);
  
});

}
loadQuestion()

nextButton.addEventListener('click', ()=> {
quiz_musique.questions++
})
