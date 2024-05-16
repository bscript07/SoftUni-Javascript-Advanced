function calculate(arg1, arg2) {
    let result = 0;
  
    let numberOne = Number(arg1);
    let numberTwo = Number(arg2);
  
    for (let i = numberOne; i <= numberTwo; i++) {
      result += i;
    }
    return result;
  }