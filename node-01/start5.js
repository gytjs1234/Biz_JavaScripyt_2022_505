const keys = ["이름", "주소", "전화번호"]; //문자형 배열

const student = { 이름: "홍길동", 전화번호: "010333", 주소: "서울시" };

console.log(student["이름"]);
console.log(student[keys[0]]);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], student[keys[i]]);
}

//JSoN Data 인 student 의 이름 속성을 별도로 추출하여
//개별 변수로 선언하기
const { 이름 } = student;
console.log(이름);

//JSON type  데이터를 return 하는 함수
const studentFun = () => {
  return {
    name: "이",
    주소: "남원시",
    나이: 20,
  };
};
const { user_name, 나이 } = studentFun();
console.log(user_name, 나이);
