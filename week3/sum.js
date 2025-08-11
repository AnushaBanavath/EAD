function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
let n = 10;
console.log("Sum of numbers from 1 to " + n + " is " + sumUpTo(n));
