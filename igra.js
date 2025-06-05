let secretNumber;
let attempts;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
}

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    document.getElementById("message").textContent = "Unesi broj između 1 i 100.";}
   else if (guess === secretNumber) {
    document.getElementById("message").textContent = `Bravo! Pogodio si broj ${secretNumber} u ${attempts} pokušaja.`;}
   else if (guess < secretNumber) {
    document.getElementById("message").textContent = "Previše malo. Pokušaj opet.";}
   else {
    document.getElementById("message").textContent = "Previše veliko. Pokušaj opet.";}
  }

function resetGame() {
  startGame();
}


startGame();