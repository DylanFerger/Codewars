// Day 1
// At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
    let max = Math.max(...ages)
    let min = Math.min(...ages)
    let diff = max - min
  return [min, max, diff];
}

// Day 2
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

let Ghost = function() {
    this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];
};


// Day 3
// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
  
  let lowerCase = sentence.toLowerCase();
  
  if (lowerCase.includes('english')){
    return true
  }else{
    return false
  }
}


// Day 4

// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

function betterThanAverage(classPoints, yourPoints) {
  let classPointsSum = classPoints.reduce((a,b) => a + b)/classPoints.length
  return yourPoints > classPointsSum
}

// Day 5

// You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

function shortenToDate(longDate) {
  return longDate.split(",")[0];
  }


  // Day 6

//   When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

function position(letter){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let index = alphabet.indexOf(letter)
  let indexPlus = index + 1
  return `Position of alphabet: ${indexPlus}`
}


function position(letter){
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  return 'Position of alphabet: ' + (abc.indexOf(letter) + 1)
}

// Day 7

