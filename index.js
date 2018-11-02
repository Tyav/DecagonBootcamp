function numberOperation(firstNumber, secondNumber) {
  var even = [];
  var odd = [];
  var prime = [];
  for (firstNumber <= secondNumber; firstNumber++) {
    if (firstNumber % 2 === 0) {
      even.push(firstNumber);
    } else if (firstNumber % 2 === 1) {
      odd.push(firstNumber);
    } else {
      continue;
    }

  }
return [even, odd];
  //for (firstNumber <= secondNumber; firstNumber++)
}
numberOperation(30, 80);