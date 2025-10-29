 const jsQuestions = [
      {
        question: "1️⃣ Quel guitariste est célèbre pour avoir brûlé sa guitare sur scène à Monterey en 1967  ?",
        options: ["Jimi Hendrix", "Eric Clapton", "Jimmy Page", "Pete Townshend"],
        answer: 0
      },
      {
        question: "2️⃣ Quel membre des Rolling Stones est connu pour son jeu de guitare rythmique unique ?",
        options: ["Keith Richards", "Mick Taylor", "Ron Wood", "Brian Jones"],
        answer: 0
      },
      {
        question: "3️⃣ Quel guitariste de Led Zeppelin est reconnu pour son riff culte sur Whole Lotta Love ?",
        options: ["Jimmy Page", "Jeff Beck", "David Gilmour", "Carlos Santana"],
        answer: 0
      },
      {
        question: "4️⃣ Quel guitariste du groupe Cream est surnommé « Slowhand » ?",
        options: [" Eric Clapton", "Peter Green", "Rory Gallagher", "Jeff Beck"],
        answer: 0
      },
      {
        question: "5️⃣ Quel guitariste folk est célèbre pour sa chanson Blowin’ in the Wind ?",
        options: ["Bob Dylan","Neil Young","Joan Baez","Simon & Garfunkel"],
        answer: 0
      },
      {
        question: "6️⃣ Quel musicien britannique a fondé le groupe Fleetwood Mac avant qu’il ne devienne pop ?",
        options: ["Peter Green", "Eric Clapton", "Jeff Beck", "Mark Knopfler"],
        answer: 0
      }
    ];

    let currentLevel = "js"; // Le niveau actuel (js → css → html)
    let questions = jsQuestions;
    let currentQuestion = 0;
    let score = 0;

    const questionContainer = document.getElementById("question-container");
    const nextBtn = document.getElementById("next-btn");
    const levelTitle = document.getElementById("level-title");

    function showQuestion() { // Fonction d'affichage
      nextBtn.style.display = "none";
      const q = questions[currentQuestion];
      questionContainer.innerHTML = `
        <div class="question">${q.question}</div>
        ${q.options.map((opt, i) => `<button class="option" onclick="selectAnswer(${i})">${opt}</button>`).join("")}
      `;
    }

    function selectAnswer(selected) {
      const q = questions[currentQuestion];
      const options = document.querySelectorAll(".option");
      options.forEach((btn, index) => {
        btn.disabled = true;
        if (index === q.answer) btn.classList.add("correct");
        else if (index === selected && selected !== q.answer) btn.classList.add("wrong");
      });

      if (selected === q.answer) score++;
      nextBtn.style.display = "block";
    }

    nextBtn.addEventListener("click", () => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        nextLevel();
      }
    });

    function nextLevel() {
      // Ici on passera à la partie CSS (prochaine étape)
      questionContainer.innerHTML = `
        <h2>✅ Partie Guitariste terminée !</h2>
        <p>Score : <strong>${score}</strong> / ${questions.length}</p>
       
      `;
      nextBtn.style.display = "block";
      
      nextBtn.onclick = loadCSSQuiz;
    }

   
    showQuestion();