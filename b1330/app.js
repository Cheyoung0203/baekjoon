const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);

a = input[0];
b = input[1];

solution(a, b);

function solution(a, b) {
  if (a > b) {
    console.log('>');
  } else if (a < b) {
    console.log('<');
  } else {
    console.log('==');
  }
}
