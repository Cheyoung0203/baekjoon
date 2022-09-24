// mycode
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// for (let i = 0; i < input.length - 1; ++i) {
//   let newValue = input[i].split(' ').map((item) => +item);

//   console.log(newValue[0] + newValue[1]);
// }

// 문자열 양 끝의 공백을 제거하자!

// ref code
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
let i = 0;
while (true) {
  const tempValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
  ++i;
  if (tempValue[0] === 0 && tempValue[1] === 0) {
    break;
  }
}
// for (let i = 0; ; ++i) {
//   const tempValue = input[i].split(' ').map((item) => +item);
//   testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
//   if (tempValue[0] === 0 && tempValue[1] === 0) {
//     break;
//   }
// }

solution(testCaseArray);

function solution(testCaseArray) {
  let A = testCaseArray[0].A;
  let B = testCaseArray[0].B;
  let idx = 1;
  while (A !== 0 || B !== 0) {
    console.log(A + B);
    A = testCaseArray[idx].A;
    B = testCaseArray[idx].B;
    ++idx;
  }
}

// while(true)로 작성해나가도 괜찮지만 무한루프 방식은 권장하지 않음
