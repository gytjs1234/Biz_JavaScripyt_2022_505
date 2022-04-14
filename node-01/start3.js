function sum() {
  let num1 = 30;
  let num2 = 50;
  return num1 + num2;
}

const add = function () {
  return 100 + 200;
};

const multi = () => {
  return 200 * 2;
};

//sum()함수를 호출하여 return 값을 sumResunlt 변수에 저장
const sumResult = sum();
const addResult = add();
const multiResult = multi();
//log는 ,찍으면 한줄로 출력
console.log(sumResult, addResult, multiResult);

//배열선언
const intKor = []; //Array()
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(3 in trees);
console.log(10 in trees);

for (let i = 0; i < trees.length; i++) {
  console.log(trees[i]);
}

const student = { 이름: "홍길동", 나이: 33, 전화번호: "01033333" };
console.log("이름" in student);

//시스템데이터

let title1;
const title2 = null; //값이없다
const title3 = ""; //문자열
const title4 = 3;
const title5 = NaN; //숫자가아니다
const title6 = undefined; //정의되지 않았다

const bYes =
  title1 || title2 || title3 || title4 || title5 || title6 || "우리나라";

console.log(bYes);
