const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().split('\n');

const inputA = Number(input[0]);
const inputB = Number(input[1]);

// solution(inputA, inputB);

// function solution(num1, arr2) {
//   let arr2Array = String(arr2)
//     .split('')
//     .map((item) => +item);
//   console.log(arr2Array);
//   for (let i = arr2Array.length - 1; i >= 0; i--) {
//     console.log(num1 * arr2Array[i]);
//   }
//   console.log(num1 * arr2);
// }

const oneNum = +String(inputB).split('')[2];
const twoNum = +String(inputB).split('')[1];
const threeNum = +String(inputB).split('')[0];

console.log(inputA * oneNum);
console.log(inputA * twoNum);
console.log(inputA * threeNum);
console.log(inputA * inputB);
