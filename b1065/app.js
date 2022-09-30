/**
 * 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다.
 * 등차수열: 연속된 두 개의 수의 차이가 일정한 수열
 * N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력해라
 * 입력 파일에 1,000보다 작거나 같은 자연수 N이 주어진다.
 * .
 * .
 * .
 * .
 * .
 * 1부터 N까지 모든수가 한수인지 확인하자
 * 한수임을 판별해서 개수를 계산해 출력한다.
 */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function sequence(num) {
  let strNum = String(num);
  if (strNum.length <= 2) {
    return true;
  }
  let diff = +strNum[1] - +strNum[0];
  let beforeNum = +strNum[1];
  for (let i = 2; i < strNum.length; ++i) {
    if (strNum[i] - beforeNum !== diff) {
      return false;
    }
    beforeNum = +strNum[i];
  }
  return true;
}

function solution(N) {
  let cnt = 0;
  for (let i = 1; i <= N; ++i) {
    if (sequence(i) === true) {
      cnt++;
    }
  }
  console.log(cnt);
}
