const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(x, y) {
  let output = [];
  if (y >= 45) {
    output[0] = x;
    output[1] = y - 45;
  } else if (y < 45) {
    if (x === 0) {
      output[0] = 23;
    } else {
      output[0] = x - 1;
    }
    output[1] = 60 + (y - 45);
  }
  return console.log(output[0], output[1]);
}
