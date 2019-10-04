// Get the element with the ID of qwerty and save it to a variable.
// Get the element with the ID of phrase and save it to a variable.
// Create a missed variable, initialized to 0, that you’ll use later to keep
// track of the number of guesses the player has missed (remember, if the player
// guesses wrong 5 times, they lose the game)
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const phrases = ['Feed Zeke', 'We Dem Boys', 'Hot Boys', 'Coop', 'Dak Attack'];
const startButton = document.querySelector('a.btn__reset');

// Create a getRandomPhraseAsArray function.
// This function should randomly choose a phrase from the phrases array and
// split that phrase into a new array of characters. The function should then
// return the new character array.
// Keep in mind that you’ll need to write this function so that it is reusable
// -- meaning that it can take any given array of strings
// (with no special characters) and return an array of characters

btn__reset.addEventListener('click', () => {
  overlay.style.display = 'none';
});

function getRandomPhraseAsArray(phrases) {
  const randomPhrases = phrases[(Math.floor( Math.random() * phrases.length))];
}
