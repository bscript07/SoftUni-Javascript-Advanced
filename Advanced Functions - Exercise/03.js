function solve() {
  let prevNumber = 0;
  let currentNumber = 1;

  function fibonacci() {
    let next = prevNumber + currentNumber;
    prevNumber = currentNumber;
    currentNumber = next;
    return prevNumber;
  }
  return fibonacci;
}
