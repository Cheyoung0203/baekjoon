// myCode
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().split('\n');

// const testCaseNum = +input[0];
// const testCases = input
//   .slice(1)
//   .map((item) => item.replace('\r', '').split(''));

// solution(testCaseNum, testCases);

// function solution(testCaseNum, testCases) {
//   for (let i = 0; i < testCaseNum; ++i) {
//     let result = 0;
//     let addPoint = 0;
//     for (let j = 0; j < testCases[i].length; ++j) {
//       if (j === 0) {
//         if (testCases[i][j] === 'O') {
//           ++addPoint;
//         }
//         result += addPoint;
//       } else {
//         if (testCases[i][j] === 'O') {
//           if (testCases[i][j - 1] === 'O') {
//             ++addPoint;
//           } else {
//             addPoint = 1;
//           }
//         } else {
//           addPoint = 0;
//         }
//         result += addPoint;
//       }
//     }
//     console.log(result);
//   }
// }

// 라매님 코드
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const arrayLength = +input[0];
const items = input.slice(1);

solution(arrayLength, items);
function solution(arrayLength, items) {
  for (let i = 0; i < arrayLength; ++i) {
    const OXList = items[i];
    let oCnt = 0;
    let score = 0;
    for (let j = 0; j < OXList.length; ++j) {
      const OorX = OXList[j];
      if (OorX === 'O') {
        oCnt++;
        score += oCnt;
      } else {
        oCnt = 0;
      }
    }
    console.log(score);
  }
}
