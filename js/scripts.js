// int factorial(int n)
// {
// 	if (n<0) return 0;		/* error value for inappropriate input */
// 	else if (n<=1) return 1;		/* if n==1 or n==0, n! = 1 */
// 	else return n * factorial(n-1);	/* n! = n * (n-1)! */
// }



$(document).ready(function(){
  $("form#enterNumber").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("input#userNumber").val());

    console.log(userNumber);

    var numberSequence = [];

    for (var number = 1; number < (userNumber + 1); number += 1) {
      numberSequence.push(number);
    }

    var numberArray = numberSequence.reverse();

    console.log(numberArray);

    var factorTotal = 1;

    for (var factor = 0; factor < numberArray.length; factor += 1) {
      factorTotal *= numberArray[factor];
    }

    var numberFactors = numberArray.join(" * ");

    console.log(numberFactors);

    $("p#breakdown").text("To find the factorial of " + userNumber + ", multiply " + userNumber + " by every positive whole number less than " + userNumber+ ". So, that's " + numberFactors + " = " + factorTotal + ".");

    $("p#equation").text("A simpler way of writing this is " + userNumber + "! = " + factorTotal + ".");


    console.log(factorTotal);

    console.log('factorial of 25 is 15511210043330985984000000');


  });
});
