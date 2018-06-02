var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animalc = 'cat'
  return animalc
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
}

var funkyFunction = function step1() {
  return function step2() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction(); 
step2();
