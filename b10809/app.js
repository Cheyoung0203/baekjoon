// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// solution(input[0]);
// function solution(S) {
//   // 알파벳 소문자 26개 a~z
//   // 길이가 26인 배열 answerArr 배열의 0번째는 a, 배열의 1번째는 b
//   // a의 ASCII : 97 - 97 = 0
//   let answerArr = new Array(26).fill(-1);
//   for (let i = 0; i < S.length; ++i) {
//     let nowChar = S[i];
//     let answerArrIdx = nowChar.charCodeAt() - 97;
//     if (answerArr[answerArrIdx] === -1) {
//       answerArr[answerArrIdx] = i;
//     }
//   }
//   let answer = '';
//   for (let i = 0; i < answerArr.length; ++i) {
//     answer += answerArr[i] + ' ';
//   }
//   console.log(answer);
// }

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);
function solution(S) {
  let arr = new Array(26).fill(-1);
  for (let i = 0; i < S.length; ++i) {
    let nowChar = S[i];
    let arrIdx = nowChar.charCodeAt() - 97;
    if (arr[arrIdx] === -1) {
      arr[arrIdx] = i;
    }
  }
  console.log(arr.join(' '));
}
