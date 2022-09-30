const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

solution(input);
// 첫번째 풀이
// function solution(arr) {
//   const max = arr.find((element) => element === Math.max(...arr));
//   const idx = arr.findIndex((element) => element === Math.max(...arr));
//   console.log(max);
//   console.log(idx + 1);
// }

// 두번째 풀이
function solution(arr) {
  let max = arr[0];
  let idx = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      idx = arr.indexOf(arr[i]);
    }
  }
  console.log(max);
  console.log(idx + 1);
}
