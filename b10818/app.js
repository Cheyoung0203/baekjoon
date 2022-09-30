//N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');
let n = +input[0];
let newArr = input[1].split(' ').map((item) => +item);

// 첫번째 풀이

// function solution(n, arr) {
//   let max = arr[0];
//   let min = arr[0];
//   for (let i = 1; i < n; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//   }

//   console.log(min, max);
// }

// solution(n, newArr);

// 두번째 풀이

function solution(arr) {
  console.log(Math.min(...arr), Math.max(...arr));
}

solution(newArr);
