// const fs = require('fs');
// const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const caseLength = +input[0];
// const items = input.slice(1);

// // console.log(caseLength);
// // console.log(items);

// solution(caseLength, items);

// function solution(caseLength, items) {
//   for (let i = 0; i < caseLength; ++i) {
//     const studentList = items[i];
//     const studentNum = +studentList[0];
//     const studentPoint = studentList
//       .split(' ')
//       .map((item) => +item)
//       .slice(1);
//     const ave =
//       studentPoint.reduce((sum, value) => (sum += value)) / studentNum;
//     const avePointOver = studentPoint.filter((item) => ave < item).length;
//     const result = ((avePointOver / studentNum) * 100).toFixed(3);
//     console.log(result + '%');
//     // console.log(studentPoint);
//     // console.log(ave);
//     // console.log(avePointOver);
//     // console.log(studentList);
//   }
// }

// 라매님 코드
const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const inputC = +input[0];
const inputTestCase = [];
for (let i = 1; i <= inputC; ++i) {
  const arr = input[i].split(' ').map((item) => +item);
  const newArr = [];
  for (let i = 1; i <= arr[0]; ++i) {
    newArr.push(arr[i]);
  }
  const testCase = {
    N: arr[0],
    arr: newArr,
  };
  inputTestCase.push(testCase);
}

solution(inputC, inputTestCase);
function solution(C, testCase) {
  for (let testCaseIdx = 0; testCaseIdx < C; ++testCaseIdx) {
    const n = testCase[testCaseIdx].N;
    // console.log(n);
    const arr = testCase[testCaseIdx].arr;
    // console.log(arr);
    let scoreSum = 0;
    for (let i = 0; i < n; ++i) {
      scoreSum += arr[i];
    }
    const average = scoreSum / n;
    let cnt = 0;
    for (let i = 0; i < n; ++i) {
      if (average < arr[i]) {
        cnt++;
      }
    }
    const ratio = ((cnt / n) * 100).toFixed(3);
    console.log(ratio + '%');
  }
}
