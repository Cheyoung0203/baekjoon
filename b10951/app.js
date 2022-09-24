// myCode ==> 문제 의도를 파악하지 못한 코드
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const newArr = [];
// for (let i = 0; i < input.length; ++i) {
//   let newValue = input[i].split(' ').map((item) => +item);
//   newArr.push({ A: newValue[0], B: newValue[1] });
// }
// cnt = newArr.length;

// solution(newArr);

// function solution(newArr) {
//   let A = 0;
//   let B = 0;
//   for (let i = 0; i < cnt; i++) {
//     A = newArr[i].A;
//     B = newArr[i].B;
//     console.log(A + B);
//   }
// }

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
// console.log(input);
for (let i = 0; i < input.length; ++i) {
  if (input[i] === '') {
    break;
  }
  const tempValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}
solution(testCaseArray);

function solution(testCaseArray) {
  let A = 0;
  let B = 0;
  idx = 0;
  while (idx !== testCaseArray.length) {
    A = testCaseArray[idx].A;
    B = testCaseArray[idx].B;
    console.log(A + B);
    idx++;
  }
}
