const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const subjectNum = +input[0];
const subjects = input[1].split(' ').map((item) => +item);

solution(subjectNum, subjects);

function solution(subjectNum, subjects) {
  let max = subjects[0];
  for (let i = 1; i < subjectNum; i++) {
    if (max < subjects[i]) {
      max = subjects[i];
    }
  }
  // console.log(max);

  // const newSubjects = subjects.map((item) => (item / max) * 100);
  const newSubjects = [];
  for (let i = 0; i < subjectNum; ++i) {
    newSubjects[i] = (subjects[i] / max) * 100;
  }
  // console.log(newSubjects);
  // const ave =
  //   newSubjects.reduce((sum, value) => {
  //     sum += value;
  //     return sum;
  //   }) / subjectNum;
  let sum = 0;
  for (let i = 0; i < subjectNum; ++i) {
    sum += newSubjects[i];
  }
  const ave = sum / subjectNum;
  console.log(ave);
}
