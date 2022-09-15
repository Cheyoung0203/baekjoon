// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' '); // 구분자인 ' '(공백)을 기준으로 인자값을 구분해 배열을

// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split(''); // 글자 하나하나로 문자를 구분해 배열로 반환
// console.log(chars[8]);
// // // expected output: "k"

// const strCopy = str.split(); // 묵시적으로 덩어리채 문자열을 배열로 반환
// console.log(strCopy);
// // // expected output: Array ["The quick brown fox jumps over the lazy dog."]

const myIntroduce = '나 윤채영은 천재다!';
const words = myIntroduce.split();

console.log(+words[0]);
