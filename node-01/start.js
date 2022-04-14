const num1 = 100;
const num2 = 200;
const sum = num1 + num2;
console.log(sum);

const student = { 이름: "홍", 주소: "ㅇㅇ", 전화번호: "010233" };
console.table(student);

const intKor = [30, 40, 50, 6];
console.table(intKor);

const intEng = Array();
console.table(intEng);
intEng[0] = 100;
intEng[1] = 200;
intEng[2] = 200;
intEng[3] = 200;
intEng[4] = 200;
console.table(intEng);

const intMath = Array();
for (let i = 0; i < 10; i++) {
  intMath[i] = Math.floor(Math.random() * (100 - 50)) + 50;
}
console.table(intMath);
console.table(student);
student.이름 = "이몽이";
console.table(student);
student.국적 = "대한";
console.table(student);
