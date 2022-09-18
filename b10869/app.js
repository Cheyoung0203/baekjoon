const { log } = require('console');
const fs = require('fs');

const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split(' ');

let num1 = +input[0];
let num2 = +input[1];

console.log(input, num1, num2);

solution(num1, num2);

function solution(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b)); // Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
  console.log(a % b);
}
