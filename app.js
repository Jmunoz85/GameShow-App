// Get the element with the ID of qwerty and save it to a variable.
// Get the element with the ID of phrase and save it to a variable.
// Create a missed variable, initialized to 0, that you’ll use later to keep
// track of the number of guesses the player has missed (remember, if the player
// guesses wrong 5 times, they lose the game)
let keyboard = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let phrases = ['Feed Zeke', 'We Dem Boys', 'Hot Boys', 'Coop', 'Dak Attack'];
let startButton = document.querySelector('a.btn__reset');


// Create a getRandomPhraseAsArray function.
// This function should randomly choose a phrase from the phrases array and
// split that phrase into a new array of characters. The function should then
// return the new character array.
// Keep in mind that you’ll need to write this function so that it is reusable
// -- meaning that it can take any given array of strings
// (with no special characters) and return an array of characters

startButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});

function getRandomPhraseAsArray(phrases) {
  const randomPhrases = phrases[(Math.floor(Math.random() * phrases.length))];
  const characterArray = randomPhrases.split('');
  return characterArray;
}

// Set the game display.
// Create an addPhraseToDisplay function that loops through an array of characters.
//  Inside the loop, for each character in the array, you’ll create a list item,
//  put the character inside of the list item, and append that list item to the
//  #phrase ul in your HTML. If the character in the array is a letter and not a
//  space, the function should add the class “letter” to the list item.
// You’ll need to write the addPhraseToDisplay function so that it can take any
// array of letters and add it to the display. To do that, the function will need
// to take an array as a parameter:
function addPhraseToDisplay(array) {
  let ul = document.createElement('ul');
  for (let i = 0; i < array.length; i += 1) {
    let character = array[i];
    let listItem = document.createElement('li');
    listItem.textContent = character;
    ul.appendChild('li');
  }
}

//Create a checkLetter function.
//The checkLetter function will be used inside of the event listener you’ll
//write in the next step.
//This function should have one parameter: the button the player has clicked
//when guessing a letter.
//The checkLetter function should get all of the
//elements with a class of “letter” (remember that we added the letter class to
//all of the letters and none of the spaces when we made the game display).
//The function should loop over the letters and check if they match the letter
//in the button the player has chosen.
//If there’s a match, the function should add the “show” class to the list item
//containing that letter, store the matching letter inside of a variable, and
//return that letter.
//If a match wasn’t found, the function should return null.

function checkLetter(clickedButton) {
  let letters = document.querySelectorAll('.letter');
  for (let i = 0; i < letters.length; i += 1) {
    if (clickedButton === letters.length[i].textContent.toLowerCase()) {
      letters[i].classList.add('show');
      match = true;
    }
  }

  return match;
}

// Add an event listener to the keyboard.
// Use event delegation to listen only to button events from the keyboard.
// When a player chooses a letter, add the “chosen” class to that button so the
// same letter can’t be chosen twice. Note that button elements have an attribute
//  you can set called “disabled” that when set to true will not respond to user
//  clicks. See the MDN documentation for more details.
// Pass the button to the checkLetter function, and store the letter returned
// inside of a variable called letterFound. At this point, you can open the
// index.html file, click any of the letters on the keyboard, and start to see
// the letters appear in the phrase.


// Count the missed guesses in the game.
// If the checkLetter function returns a null value, the player has guessed
// the wrong letter. In the keyboard event listener, after checkLetter is called,
// write a statement to check the value of the letterFound variable. If the value
//  is null, remove one of the tries from the scoreboard. If you haven't created
//  it yet, make sure you have a missed variable to store the state of the
//  scoreboard (initialized to 0). When you remove a try from the scoreboard,
//  make sure to increase the missed count by 1.

// Create a checkWin function.
// Each time the player guesses a letter, this function will check whether the
// \game has been won or lost. At the very end of the keyboard event listener,
// you’ll run this function to check if the number of letters with class “show” is
//  equal to the number of letters with class “letters”. If they’re equal, show
//  the overlay screen with the “win” class and appropriate text. Otherwise, if
//  the number of misses is equal to or greater than 5, show the overlay screen
//  with the “lose” class and appropriate text.
