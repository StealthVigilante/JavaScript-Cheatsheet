# JavaScript-Cheatsheet

few functions to note:

# padstart padStart(targetLength, padString) its added to the front of the string

const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
timerElement.textContent = `${minutes}:${remainingSeconds}`;

# event listeners added directly to the documnet 

document.getElementById("guess-input").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkGuess();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    displayEmoji();
});

# focus on the input field 

inputfiled.focus();