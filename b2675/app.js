// 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다.
// 각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8) 그리고
// 문자열 S가 공백으로 구분되어 주어진다.
// 예제 출력
// AAABBBCCC
/////HHHHHTTTTTPPPPP

//mycode
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// let testCase = [];
// for (let i = 1; i < input.length; ++i) {
//   let value = input[i].split(' ');
//   testCase.push(value);
// }

// solution(+input[0], testCase);

// function solution(count, testCase) {
//   const caseNumArr = [];
//   const caseStringArr = [];
//   for (let i = 0; i < testCase.length; ++i) {
//     let caseNum = +testCase[i][0];
//     caseNumArr.push(caseNum);
//     let caseString = testCase[i][1].replace('\r', '').split('');
//     caseStringArr.push(caseString);
//   }

//   for (let i = 0; i < count; ++i) {
//     let answer = '';
//     for (let j = 0; j < caseStringArr[i].length; ++j) {
//       //   console.log(caseNumArr[i]);
//       //   console.log(caseStringArr[i][j]);
//       answer += caseStringArr[i][j].repeat(caseNumArr[i]);
//     }
//     console.log(answer);
//   }
// }

// 라매개발자
const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let rsArray = [];
for (let i = 1; i <= +input[0]; ++i) {
  const inputRS = input[i].split(' '); // splited된 각 테스트 케이스를 새로운 변수 inputRS를 선언하여 할당한다.
  rsArray.push({
    R: +inputRS[0],
    S: inputRS[1],
  });
  // rsArray 배열에 key-value형태 값으로 할당한다.
}

solution(+input[0], rsArray);
function solution(N, rsArray) {
  for (let i = 0; i < N; ++i) {
    let { R, S } = rsArray[i]; // 객체 key값에 rsArray value 데이터를 할당한다.
    // console.log(R);
    // console.log(S);
    let P = '';
    for (let j = 0; j < S.length; ++j) {
      // S value 데이터 길이만큼 반복한다.
      for (let k = 0; k < R; ++k) {
        // R key 데이터 길이만큼 반복한다.
        P += S[j];
        // P 변수에 S의 j 인덱스 문자를 각각 R번 반복해서 할당한다.
      }
      // 결국에는 각S(string)의 문자들은 R값 만큼 반복해서 할당된다.
    }
    console.log(P);
  }
}
