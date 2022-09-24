// myCode
const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const total = +input[0];
const cnt = +input[1];
let sum = 0;

solution(total, cnt, sum);

function solution(total, cnt, sum) {
  for (let i = 2; i <= cnt + 1; ++i) {
    let newArr = input[i].split(' ').map((item) => +item);
    sum += newArr[0] * newArr[1];
  }

  console.log(total === sum ? 'Yes' : 'No');
}

// 참고 코드
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// let total = +input[0];
// let cnt = +input[1];
// let sum = 0;

// for (let i = 2; i <= cnt + 1; ++i) {
//   let newArr = input[i].split(' ').map((item) => Number(item));
//   sum += newArr[0] * newArr[1];
// }

// console.log(total === sum ? 'Yes' : 'No');
