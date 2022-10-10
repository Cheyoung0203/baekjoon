const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].toUpperCase().split('');

solution(input);

function solution(input) {
  const set = new Set(input);
  const newArr = [...set];
  const numArr = [];
  for (let i = 0; i < newArr.length; ++i) {
    let cnt = 0;
    for (let j = 0; j < input.length; ++j) {
      if (newArr[i] === input[j]) {
        cnt++;
      }
    }
    numArr.push(cnt);
  }

  const obj = {};
  for (let i = 0; i < newArr.length; ++i) {
    obj[newArr[i]] = numArr[i];
  }

  let max = Math.max(...Object.values(obj));
  let maxNum = 0;
  for (let i = 0; i < Object.values(obj).length; ++i) {
    if (max === Object.values(obj)[i]) {
      maxNum++;
    }
  }
  if (maxNum > 1) {
    console.log('?');
  } else {
    for (let i = 0; i < Object.values(obj).length; ++i) {
      if (max === Object.values(obj)[i]) {
        console.log(Object.keys(obj)[i]);
      }
    }
  }
}
