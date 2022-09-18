const { log } = require('console');
const fs = require('fs');

const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().trim();
// trim() 문자 양끝의 공백을 제거
// split() 지정한 구분자를 이용하여 여러 개의 문자열로 나눠 배열로 반환

console.log(input + '??!');
