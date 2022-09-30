/**
 * example
 * 33 + 3 + 3 = 39, 39 + 3 + 9 = 51 등등
 * 이 때 n을 d(n)의 생성자라고 할 때 33은 39의 생성자이다.
 * 91 + 9 + 1 = 101, 100 + 1 + 0 + 0 과 같이 생성자가 1개 이상일 수 있다.
 * 생성자가 없는 숫자를 self number라고 한다.
 * 10000이하의 self number를 한줄에 하나씩 출력해라
 */
solution();

function d(num) {
  let sum = 0;
  let strNum = String(num);
  for (let i = 0; i < strNum.length; ++i) {
    sum += +strNum[i];
  }
  return num + sum;
}

function solution() {
  solution();

  function d(num) {
    let sum = 0;
    let strNum = String(num);
    for (let i = 0; i < strNum.length; ++i) {
      sum += +strNum[i];
    }
    return num + sum;
  }

  function solution() {
    const arr = Array(10001).fill(0);
    // no self-number를 구하자
    for (let i = 1; i <= 10000; ++i) {
      let ans = d(i);
      if (ans <= 10000) {
        arr[ans]++;
      }
    }
    for (let i = 1; i <= 10000; ++i) {
      if (arr[i] === 0) {
        console.log(i);
      }
    }
  }

  const arr = Array(10001).fill(0);
  // no self-number를 구하자
  for (let i = 1; i <= 10000; ++i) {
    let ans = d(i);
    if (ans <= 10000) {
      arr[ans]++;
    }
  }
  for (let i = 1; i <= 10000; ++i) {
    if (arr[i] === 0) {
      console.log(i);
    }
  }
}
