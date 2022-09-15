const fs = require('fs');
//fs모듈은 파일 시스템에 접근하는 모듈입니다. 즉, 파일을 생성하거나 삭제하고 읽거나 쓸 수 있습니다.

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// 지정된 경로 파일을 filePath에 저장한다.
// 백준에서 테스트하는 플랫폼이 리눅스이기 때문에 백준 공식 홈페이지에서 제공하는 파일 경로를 받아오는것 이다.
// 백준환경이 아니라 local 환경에서 쓰면은 그에 맞는 경로를 작성해주면 된다.

let input = fs.readFileSync(filePath).toString().split('\n');
// 백준 문제중에 입력란에 줄바꿈 처리된 문제가 있을 수 있다... 따라서 줄바꿈화 하여 split 해준다.
// 변수에 fs모듈의 읽기 함수를 통해 저장된 파일을 저장한다. 파일을 문자열화된 배열로 리턴한다.

input = input[0]; // input 값을 배열에서 배열안에 있는 문자 리터럴 그 자체로 변경한다.
input = input.split(' ').map((item) => +item);
// 공백을 기준으로 리터럴을 분리해주고 모두 number type으로 암시적 변환을 한다.
// split() ? ==> string 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눠 배열로 반환

console.log(input);

solution(input[0], input[1]);

function solution(a, b) {
  console.log(a + b);
}
