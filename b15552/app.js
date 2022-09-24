//myCode
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// let cnt = +input[0];
// const newArr = [];
// let answer = '';
// for (let i = 1; i <= cnt; ++i) {
//   newValue = input[i].split(' ').map((item) => +item);
//   newArr.push(newValue);
// }

// solution(cnt, newArr);

// function solution(cnt, newArr) {
//   for (let i = 0; i < cnt; ++i) {
//     answer += newArr[i][0] + newArr[i][1] + '\n';
//   }
//   console.log(answer); //시간 초과로인해 한번에 출력하도록 개행문자를 추가했다.
// }

// ref code
const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let max = +input[0];
let answer = '';

for (let i = 1; i <= max; ++i) {
  let num = input[i].split(' ').map((item) => +item);
  answer += num[0] + num[1] + '\n';
  // console.log(answer);
}
console.log(answer);
