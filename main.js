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