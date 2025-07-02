
const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

const question = document.getElementById('question');
const scoreEle = document.getElementById("score");
const options = document.getElementById('options');
let score=0;
scoreEle.textContent=`Score: ${score}`


function showQuestion(questionjson){
  if (questionNumber>quesJSON.length){
    question.textContent="Quize complete";
    options.innerHTML="";
    nextButton.style.display="none";
    return;
  }
  question.textContent = options.textContent="";
  question.textContent = questionjson.question;
  shuffle(questionjson.options);
  for (let opt of questionjson.options) {
    const op = document.createElement("button");
    op.textContent = opt;
    options.appendChild(op);
    op.addEventListener("click",()=>{
      if(opt==questionjson.correctAnswer){
        score+=1;
      }else{
        score-=0.25
      }
      scoreEle.textContent=`Score: ${score}`;
      options.innerHTML="";
      showQuestion(quesJSON[questionNumber++]);
    });
  }
}

let questionNumber=0;
showQuestion(quesJSON[questionNumber++]);

const nextButton=document.createElement("button");
nextButton.setAttribute("id","next");
nextButton.textContent="Next";
document.body.appendChild(nextButton);
nextButton.addEventListener("click",()=>{
  showQuestion(quesJSON[questionNumber++]);
})

function shuffle(options){
  for(let i=options.length-1;i>=0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [options[i],options[j]]=[options[j],options[i]];
  }
}
