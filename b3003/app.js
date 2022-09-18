const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0];
input = input.split(' ').map((item) => +item);

originValue = [1, 1, 2, 2, 2, 8];
result = [];

function calculate(input) {
  let resultArr = [];
  for (let i = 0; i < 6; i++) {
    resultArr[i] = originValue[i] - input[i];
  }

  return resultArr;
}

result = calculate(input);
console.log(...result);
