var userNumber = 0;

var factorial = function(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    userNumber = (number * factorial(number - 1));
    return userNumber;
  }
};

console.log(factorial(6));

$(document).ready(function(){
  $("form#enterNumber").submit(function(event){
    event.preventDefault();
    userNumber = parseInt($("input#userNumber").val());
    console.log(userNumber);
    factorial(userNumber);
    console.log(userNumber);
  });

});


//
// var userNumber = 0;
// var numberSequence = [];
// var numberArray = [];
// var factorTotal = 1;
// var numberFactors = "";
//
// var getNumberArray = function(number) {
//
//   for (var number = 1; number < (userNumber + 1); number += 1) {
//     numberSequence.push(number);
//   }
//   numberArray = numberSequence.reverse();
//   return numberArray;
// }
//
// var findFactorial = function(array) {
//   for (var factor = 0; factor < numberArray.length; factor += 1) {
//     factorTotal *= numberArray[factor];
//   }
//   numberFactors = numberArray.join(" * ");
//   return numberFactors;
// }
//
// $(document).ready(function(){
//   $("form#enterNumber").submit(function(event){
//     event.preventDefault();
//
//     begin comment -- repeated globals below is to clear out arrays and factor total on repeat use of input -- end comment
//
//     numberSequence = [];
//     numberArray = [];
//     factorTotal = 1;
//
//     userNumber = parseInt($("input#userNumber").val());
//     getNumberArray(userNumber);
//     findFactorial(numberArray);
//     console.log(factorTotal);
//     $("p#breakdown").text("To find the factorial of " + userNumber + ", multiply " + userNumber + " by every positive whole number less than " + userNumber+ ". So, that's " + numberFactors + " = " + factorTotal + ".");
//
//     $("p#equation").text("A simpler way of writing this is " + userNumber + "! = " + factorTotal + ".");
//   });
// });

// Below is a more compact javascript loop to get a factorial total. I wanted to display array so I kept my function above. the main difference is the counting backwards to a number greater than 1
// var factor = function(number) {
//   var count;
//   for (count = number; count > 1; count--) {
//     factorTotal *= count;
//   }
//   return factorTotal;
// };
