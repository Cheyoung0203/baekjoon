const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = +input[0];

solution(input);

function solution(n) {
  let result = 0;
  if (1 <= n <= 10000) {
    for (let i = 1; i <= n; ++i) {
      result += i;
    }
    console.log(result);
  }
}
