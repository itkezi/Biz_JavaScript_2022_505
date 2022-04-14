/* 
변수의 선언 키워드 : var, const, let
var : java에서 static 변수 선언하기
const : 불변 변수 java에서 final 변수 선언하기
let : 일반적인 변수, JS에서는 변수의 type을 지정하지 않는다.
  = 변수에 대한 문제가 발생할 수 있다.
  = 동적 type 변수 ( 자바 : 정적 typep 변수 )
*/

// 선언된 변수의 type이 바뀌어도 오류가 안나는 모습들
var num = 10;
num = "대한민국";

let num1 = 10;
num1 = "우리나라";

// 선언된 변수가 중복 선언되었음에도 오류가 안남 (var를 안쓰는 이유)
var num = "korea";

// 그래도 let은 중복 선언 오류를 잡아냄 (오류라 주석처리)
// let num1 = "Republic Of Korea";

console.log(num1);

// 변수 선언 안했는데도 정상 출력됨 (이거 Var 변수라고 함)
intNum = 100;
console.log(intNum);

// let 키워드로 선언된 변수는 선언{}을 벗어나면 소멸된다. (오류 주석)
// for (let i = 0; i < 10; i++) {}
// console.log(i);

// var 키워드로 선언된 변수는 public static이면서 성질이 사납다
// 가급적 사용 금지 (용도에 맞아 어쩔수 없는 경우 제외)
for (var j = 0; j < 10; j++) {}
console.log(j);

// 변수 값을 이후에 변경해야 하는 경우 const를 사용하면 안된다.
// for (const c = 0; c < 10; c++) {}
