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
