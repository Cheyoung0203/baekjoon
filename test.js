const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]); // 정수 N 입력
function f(num) {
  // f 함수
  const strNum = String(num); // // 정수 N을 문자형으로 명시적 변환
  if (strNum.length <= 2) {
    return true;
  } // 정수 N이 2자리수 이하 문자형배열이면 'true'를 반환한다.
  const diff = +strNum[1] - +strNum[0];
  // diff 변수에 가장 큰수자리와 그 다음 자릿수의 공차를 할당
  let beforeNum = +strNum[1]; // 변수 beforeNum을 선언하고 일의 자리수 할당
  for (let i = 2; i < strNum.length; ++i) {
    if (strNum[i] - beforeNum !== diff) {
      return false; // 1+n번째 공차값이 첫번째 공차값과 다르면 false를 반환
    }
    beforeNum = +strNum[i]; // true면 befroeNum에 다음수를 할당 ==> 반복문을 반복하거나 나가게됨
  }
  return true; // 반복문이 끝날때까지 공차값이 계속 동일하면 true를 반환한다.
}

function solution(N) {
  let cnt = 0; // 답이될 변수를 선언 일단 0을 할당
  for (let i = 1; i <= N; ++i) {
    if (f(i)) {
      cnt++; // 한수인지 확인해서 맞다면 count값을 1 증가시킴
    }
  } // 1부터 N까지 모든수를 f함수에 넣고 한수인지 확인
  console.log(cnt); // count값을 반환
}
