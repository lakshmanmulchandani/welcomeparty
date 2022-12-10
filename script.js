// ============================================
// random LOTR name generator
// ============================================

// create an array of first names
let firstNames = ["Bhavana", "Gaurav", "Pankaj", "Lakshman"];
// create an array of last names

// save length of arrays
let firstLength = firstNames.length;

// pull one name from each array and return them
let getNames = (myArray, num) => {
  // if the data types are correct
  if (Array.isArray(myArray) && typeof num == 'number') {
    // get value from array
    if (typeof myArray[num] == 'string') {
      return myArray[num];
    }
    console.error('Value from ' + myArray + ' is not a string');
    return false;
  } else {
    console.error('getNames first parameter should be an array.');
  }
};

// then display them to the user
let showName = finalName => {
  if (typeof finalName == 'string') {
    document.getElementById('name').innerHTML = finalName;
    return true;
  }
  console.error('finalName should be a string.');
  return false;
};

// create random number in a certain range
let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// when the user clicks 'generate'
document.getElementById('generate').addEventListener('click', () => {
  // create new random nums to use as index in array
  let firstRandNum = getRandomInt(0, firstLength - 1);


  // use those nums to get values from arrays
  let firstName = firstNames[firstRandNum];


  if (firstName !== undefined) {
    // create final name
    let finalName = firstName;
    // set the value of paragragh element
    showName(finalName);
  } else {
    console.error('values were undefined');
    console.error('firstRandNum ' + firstRandNum);
  }
});