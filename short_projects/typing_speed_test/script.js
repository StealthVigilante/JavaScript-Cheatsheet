const sentences = `The quick brown fox jumps over the lazy dog . Sphinx of black quartz, judge my vow . Pack my box with five dozen liquor jugs . How vexingly quick daft zebras jump !`;

const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const speedElement = document.getElementById("speed");
const accuracyElement = document.getElementById("accuracy");
const resultElement = document.getElementById("result");
const retryButton = document.getElementById("retry-btn");

sentenceElement.textContent="";
seconds=30;
let correctwords=0
let correctchar=0;
let wpm=0;
let accuracy=0;

startButton.addEventListener("click",()=>{
    inputElement.removeAttribute("disabled");
    sentenceElement.textContent=sentences;
    startButton.disabled = true;
    inputElement.focus();
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
timerElement.textContent = `${minutes}:${remainingSeconds}`;
    const timer = setInterval(()=>{
        seconds--;
        const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
timerElement.textContent = `${minutes}:${remainingSeconds}`;
        if(seconds<=0){
            clearInterval(timer);
            resultElement.style.display="block";
            inputElement.disabled=true;
            startButton.disabled=true;
            let compwords=sentences.split(" ");
            let inputwords=inputElement.value.split(" ");
            correctwords=0;
            for(let i in compwords){
                if(compwords[i]==inputwords[i]){
                    correctwords++;
                    let compchar=compwords[i].split("");
                    let inputchar=inputwords[i].split("");
                    for(let j in compchar){
                        if(compchar[j]==inputchar[j]){
                            correctchar++;
                        }
                    }
                }
            }
            wpm=(correctwords/30)*60;
            accuracy=((correctchar/compwords.length)*100).toFixed(2);
            speedElement.textContent=wpm;
            accuracyElement.textContent=accuracy;
        }
    },1000);
});

retryButton.addEventListener("click",()=>{
    startButton.disabled=false;
    resultElement.style.display="none";
    inputElement.value="";
    inputElement.disabled="true";
    resultElement.style.display="none";
    seconds=30;
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
timerElement.textContent = `${minutes}:${remainingSeconds}`;

    const inputwords=
    console.log(sentences.split(" "));
});