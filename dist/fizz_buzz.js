"use strict";

var readline = require('readline-sync');

console.log("Game Start!");
var answer = readline.question("Input Number? ");

for (var i = 1; i <= answer; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz Buzz!");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }
}