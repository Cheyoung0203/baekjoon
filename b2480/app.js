const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0].split(' ').map((item) => +item);

solution(input[0], input[1], input[2]);

function solution(a, b, c) {
  let bonus = 0;
  let dice;
  let point;
  if (a === b && a === c) {
    bonus = 10000;
    dice = a;
    point = bonus + dice * 1000;
  } else if (a === b || a === c || b === c) {
    bonus = 1000;
    dice = a === b ? a : c;
    point = bonus + dice * 100;
  } else {
    dice = Math.max(a, b, c);
    point = dice * 100;
  }
  return console.log(point);
}
