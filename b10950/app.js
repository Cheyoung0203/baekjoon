// 두가지 방법으로 해보기

// 첫번째 방법
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// const inner = [];
// for (let i = 1; i <= +input[0]; ++i) {
//   const innerValue = input[i].split(' ').map((item) => +item);
//   inner.push(innerValue);
// }

// solution(+input[0], inner);

// function solution(T, arr) {
//   for (let i = 0; i < T; ++i) {
//     console.log(inner[i][0] + inner[i][1]);
//   }
// }

// 두번째 방법
const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const numbers = [];
for (let i = 1; i <= input[0]; i++) {
  numbers.push(input[i].split(' '));

  console.log(Number(numbers[i - 1][0]) + Number(numbers[i - 1][1]));
}
