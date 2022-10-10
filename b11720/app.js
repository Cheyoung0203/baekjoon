// myCode
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stidn' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');
//// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 런타임 에러로인한 메모리 크기 줄임

// const numCnt = +input[0];
// const numString = String(input[1]);

// solution(numCnt, numString);

// function solution(numCnt, numString) {
//   let sum = 0;
//   if (1 <= numCnt <= 100) {
//     for (let i = 0; i < numCnt; ++i) {
//       sum += +numString[i];
//     }
//     console.log(sum);
//   }
// }

// 라메개발자님 코드
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(input[0], input[1]);
function solution(N, numbers) {
  let sum = 0;
  for (let i = 0; i < N; ++i) {
    sum += +numbers[i];
  }
  console.log(sum);
}
