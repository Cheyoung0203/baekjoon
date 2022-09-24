//myCode
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

// let input = fs.readFileSync(filePath).toString().split('\n');
// let first_line = input[0].split(' ').map((item) => +item);
// let arrNum = input[1].split(' ').map((item) => +item);

// const arrNumCnt = first_line[0];z
// const standardNum = first_line[1];
// let arrResult = '';

// solution(arrNum, arrNumCnt, standardNum);

// function solution(arrNum, arrNumCnt, standardNum) {
//   for (let i = 0; i < arrNumCnt; i++) {
//     if (arrNum[i] < standardNum) {
//       arrResult += arrNum[i] + ' ';
//     }
//   }
//   console.log(arrResult.trim());
// }

// ref code
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [inputN, inputX] = input[0].split(' ').map((item) => +item);
const arrayA = input[1].split(' ').map((item) => +item);

solution(inputN, inputX, arrayA);

function solution(N, X, A) {
  const answerArray = [];
  for (let i = 0; i < N; ++i) {
    if (A[i] < X) {
      answerArray.push(A[i]);
    }
  }
  console.log(answerArray.join(' '));
}
