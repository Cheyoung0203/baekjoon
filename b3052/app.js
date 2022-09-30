/**
 * 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.
 * 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

// solution(input);

// 첫번째 방법
// function solution(arr) {
//   const arr2 = arr.map((element) => element % 42);
//   // console.log(arr2);
//   let cnt = 0;
//   let result = 0;
//   for (let i = 0; i < arr2.length; ++i) {
//     let arr3 = [];
//     cnt++;
//     for (let j = cnt; j < arr2.length; ++j) {
//       arr3.push(arr2[j]);
//     }
//     if (!arr3.includes(arr2[i])) {
//       result++;
//     }
//   }
//   console.log(result);
// }

// 두번째 방법
// function solution(arr) {
//   let newArr = arr.map((item) => item % 42);
//   console.log(newArr);

//   let result = {};
//   newArr.forEach((element) => {
//     if (result[element]) {
//       result[element]++;
//     } else {
//       result[element] = 1;
//     }
//     console.log(result);
//   });
//   console.log(Object.keys(result).length);
// }

// 세번째 방법
// function solution(arr) {
//   const answer = Array(42).fill(0);
//   // console.log(answer);
//   for (let i = 0; i < arr.length; i++) {
//     const nowChar = arr[i] % 42;
//     answer[nowChar]++;
//   }
//   let cnt = 0;
//   for (let i = 0; i < answer.length; ++i) {
//     if (answer[i] !== 0) {
//       cnt++;
//     }
//   }
//   console.log(cnt);
// }
