const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const cnt = +input[0];
const newArr = [];

for (let i = 1; i <= cnt; ++i) {
  newValue = input[i].split(' ').map((item) => +item);
  newArr.push(newValue);
}
solution(cnt, newArr);

function solution(cnt, arr) {
  let sum = 0;
  for (let i = 0; i < cnt; ++i) {
    sum = arr[i][0] + arr[i][1];
    console.log(`Case #${i + 1}: ${arr[i][0]} + ${arr[i][1]} = ${sum}`);
  }
}
