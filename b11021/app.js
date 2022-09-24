const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let testCnt = +input[0];
const testArr = [];
let answer = '';
for (let i = 1; i <= testCnt; ++i) {
  testValue = input[i].split(' ').map((item) => +item);
  testArr.push(testValue);
}

solution(testCnt, testArr);

function solution(testCnt, testArr) {
  let sum = 0;
  for (let i = 0; i < testCnt; ++i) {
    sum = testArr[i][0] + testArr[i][1];
    answer += `Case #${i + 1}: ${sum}` + '\n';
  }

  console.log(answer);
}
