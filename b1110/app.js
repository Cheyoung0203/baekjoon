const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = +input[0];
let testCaseArr = [];
solution(input);

function solution(input) {
  let origin = input;
  let hap = 0;
  let cnt = 0;
  do {
    if (input < 10) {
      testCaseArr[0] = '0';
      testCaseArr[1] = input + '';
    } else {
      testCaseArr = (input + '').split('');
      // console.log(testCaseArr);
    }
    hap = +testCaseArr[0] + +testCaseArr[1];
    if (hap < 10) {
      testCaseArr[0] = testCaseArr[1];
      testCaseArr[1] = hap + '';
      // console.log(testCaseArr);
    } else {
      testCaseArr[0] = testCaseArr[1];
      testCaseArr[1] = (hap + '')[1];
      // console.log(testCaseArr);
    }
    input = Number(testCaseArr[0] + testCaseArr[1]);
    // console.log(hap);
    // console.log(input);
    // console.log(origin);
    ++cnt;
  } while (input !== origin);
  console.log(cnt);
}
