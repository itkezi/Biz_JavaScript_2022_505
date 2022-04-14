// 함수 선언들
function sum() {
  let num1 = 30;
  let num2 = 50;
  return num1 + num2;
}

// 마치 class처럼 작동
const add = function () {
  return 100 + 200;
};

// 화살표 함수 (제일 많이 씀, 위의 add()와 기능은 같음)
const multi = () => {
  return 200 * 2;
};

// sum() 함수를 호출하여 return 값을 sumResult 변수에 저장
const sumResult = sum();
const addResult = add();
const multiResult = multi();
console.log(sumResult, addResult, multiResult);

const intKor = []; // Array()
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
console.log(3 in trees);
console.log(10 in trees);

for (let i = 0; i < trees.length; i++) {
  console.log(trees[i]);
}

const student = { 이름: "홍길동", 나이: 33, 전화: "010-111" };
console.log("이름" in student);

// js에서는 선언만 된 변수와 null, "", 0, NaN, undefined가 저장된 변수는 "논리적 false로 인식"한다
let title1;
const title2 = null;
const title3 = "";
const title4 = 0;
const title5 = NaN; // Not a Number
const title6 = undefined;

// 논리적 false인 변수와 OR(||) 연산자를 조합하면 상당히 편리한 코드 구현이 가능하다.
// 논리적 false인 변수가 있으면 건너뛰기를 실행하여 오른쪽의 값을 변수에 대입한다
const btitle =
  title1 || title2 || title3 || title4 || title5 || title6 || "우리";
console.log(btitle);

// java스러운 코드
// if (title2 != null ) {
//     btitle = title2;
// } else {
//     btitle = "대한민국";}
//
// 위 코드를 js스럽게 바꾸면
// btitle = title2 || "대한민국";

// js 문자열 변수는 문자열 1개씩을 요소로 갖는 배열처럼 사용 가능하다
//
// 배열처럼 문자열변수[index]와 같은 코드로 요소의 값을 읽을 수 있다.
// 단, 문자열변수[index] = "한"과 같이 요소의 값을 변경할 수는 없다
const nation = "대한민국";

for (let i = 0; i < nation.length; i++) {
  console.log(nation[i]);
}
