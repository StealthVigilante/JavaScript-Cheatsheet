const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

  let currentEmojiIndex = 0;
  let score = 0;
  let time = 30;
  //


  //
  const guessInput = document.getElementById("guess-input");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const timerElement = document.getElementById("timer");
  const gametimeElements = document.getElementsByClassName("gametime");

  function displayEmoji() {
    running();
    const descriptionElement = document.getElementById("description");
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
  }

  function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctEmoji) {
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.textContent = "Wrong!";
    }
    console.log(score);
    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = "";
    guessInput.focus();
    nextEmoji();
  }

  function nextEmoji() {
    currentEmojiIndex++;

    if (currentEmojiIndex === emojiDetails.length) {
      currentEmojiIndex = 0;
      score=0;
    }

    displayEmoji();
  }

  document
    .getElementById("guess-input")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        checkGuess();
      }
    });

  document.addEventListener("DOMContentLoaded", () => {
    displayEmoji();
  });

function running(){
  const runtimer = setInterval(()=>{
      time--;
      timerElement.textContent=`Time left: ${time}`;
      if(time<=0){
        clearInterval(runtimer);
        clearelements();
      }
    },1000);
  
}
function clearelements(){
    timerElement.textContent=`Time's Up!`;
  for(let element of gametimeElements){
      element.style.display="none";
  }
  resultElement.textContent=`Result: ${score}`;
}


  


