function solve(int1, int2) {
  while (int2 !== 0) {
    let temp = int2;
    int2 = int1 % int2;
    int1 = temp;
  }
  return int1;
}

console.log(solve(2154, 458));
