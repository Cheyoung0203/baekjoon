const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
input = +input[0];

solution(input);

function solution(n) {
  for (let line = n; line > 0; --line) {
    let printSpace = '';
    let printStar = '';
    for (let i = 1; i < line; ++i) {
      printSpace += ' ';
    }
    printStar += '*'.repeat(n - line + 1);
    console.log(printSpace + printStar);
  }
}
