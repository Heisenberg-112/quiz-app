const quizData = [
  {
    question:
      "What are the names of the elements that form stylized title of the show?",
    a: "Beryllium & Bismuth",
    b: "Berkelium & Bromine",
    c: "Beryllium & Barium",
    d: "Bromine & Barium",
    correct: "c",
  },
  {
    question:
      "What is the name of the car wash that Bogdan sells to Skyler and Walter?",
    a: "A1A Car Wash",
    b: "Bogdans Auto Detailing",
    c: "Clear Clean Car Wash",
    d: "Champion Car Wash",
    correct: "a",
  },
  {
    question:
      "When Walter is trying to rid his lab of a fly, what does Jesse mistake for the dead insect?",
    a: "A beetle",
    b: "An M&M",
    c: "A chocolate chip",
    d: "A raisin",
    correct: "d",
  },
  {
    question:
      "By the last episode of season two, how much money did savewalterwhite.com raise?",
    a: "$510",
    b: "$490",
    c: "$370",
    d: "$230",
    correct: "a",
  },
  {
    question:
      "What is printed on the vanity license plate of the car Walter White destroys in the episode Cancer Man?",
    a: "Jim Wins",
    b: "Tom Wins",
    c: "Ken Wins",
    d: "Max Wins",
    correct: "c",
  },
  {
    question:
      "In the episode Better Call Saul, what does the first person in Saul Goodmans commercial say he got in trouble for?",
    a: "DUI",
    b: "Workplace theft",
    c: "Drug Posession",
    d: "Jaywalking",
    correct: "b",
  },
  {
    question:
      "In the season two episode titled Grilled, what does Hector Salamanca see Walter White do that makes him angry?",
    a: "Walter changes the channel when Hector is watching telenovelas",
    b: "He sprinkles ricin into Tucos burrito",
    c: "Hector recognizes Walter from past dealings",
    d: "Hector recognizes Jesse from past dealings",
    correct: "b",
  },
  {
    question:
      "In the episode Caballero Sin Nombre, what type of pizza does Walter White throw on the roof? ",
    a: "Pepperoni",
    b: "Sausage",
    c: "Cheese",
    d: "Olive",
    correct: "a",
  },
  {
    question:
      "What gift does Gustavo Fring give Don Eladio when he visits him in Mexico?",
    a: "Cuban Cigars",
    b: "A diamond-studded belt buckle",
    c: "A rare bottle of tequila",
    d: "Jesse Pinkman, to cook meth for him",
    correct: "c",
  },
  {
    question:
      "What does Walter Jr. say the veggie bacon smells like in the first ever episode?",
    a: "Trash",
    b: "Potato",
    c: "Glue",
    d: "Band-Aids",
    correct: "d",
  },
  {
    question: "What is the name of Jesses younger brother?",
    a: "Sam",
    b: "He has no brother",
    c: "David",
    d: "Jake",
    correct: "d",
  },
  {
    question: "Breaking Bad is set in which state?",
    a: "California",
    b: "Colorado",
    c: "Idaho",
    d: "New Mexico",
    correct: "d",
  },
  {
    question: "Which new hobby does Hank take up?",
    a: "Baseball",
    b: "Collecting minerals",
    c: "Painting",
    d: "Photography",
    correct: "b",
  },
  {
    question: "What is the name of the school where Walter teaches?",
    a: "King High School",
    b: "Anna Lara High School",
    c: "JP Wynn High School",
    d: "Central High School",
    correct: "c",
  },
  {
    question: "What was Walters original car?",
    a: "He has no car",
    b: "2004 Pontiak Aztek",
    c: "2006 Jeep Commander",
    d: "1973 Fiat 850",
    correct: "b",
  },
  {
    question:
      "What is the name of the acid that Walter uses to dispose of his victims?",
    a: "He burns his victims.",
    b: "Citric acid",
    c: "Hydrofluoric acid",
    d: "He buries them under the ground.",
    correct: "c",
  },
  {
    question: "Where does the pseudonym Saul Goodman come from?",
    a: "It refers to the Saul mentioned in the bible.",
    b: "Its all good, man.",
    c: "Saul is just simply a good person.",
    d: "No specific meaning.",
    correct: "b",
  },
  {
    question:
      "How does Element 62, Samarium, which is used in the treatment of cancer, relate to the show?",
    a: "There are 62 episodes of Breaking Bad.",
    b: "It is Walts favorite chemical.",
    c: "Samarium is not used to treat cancer.",
    d: "There is no relation.",
    correct: "a",
  },
  {
    question: "What street does Jesse live on?",
    a: "Margo Street",
    b: "Picadily Street",
    c: "South Side Boulevard",
    d: "East Street",
    correct: "a",
  },
  {
    question: "What was the name of Saul Goodmans personal bodyguard?",
    a: "Mike Ehrmantraut",
    b: "Huell Babineaux",
    c: "Tyrus Kitt",
    d: "Donald Margolis",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2 id="h2-a">You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
