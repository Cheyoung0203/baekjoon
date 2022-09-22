const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let startTime = input[0].split(' ').map((item) => +item);
let cookingTime = +input[1];

solution(startTime, cookingTime);

function solution(arr, time) {
  if (arr[1] + time < 60) {
    arr[1] = arr[1] + time;
  } else {
    arr[0] = arr[0] + parseInt((arr[1] + time) / 60);
    arr[1] = (arr[1] + time) % 60;
    if (arr[0] > 23) {
      arr[0] -= 24;
    }
  }

  return console.log(arr[0], arr[1]);
}
