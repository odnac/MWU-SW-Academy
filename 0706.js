/*  3 정규표현식 */

////// 생성방법
//// 생성자 함수 방식
// new RegExg(표현식)
const regExp1 = new RegExp("^\d+");
// new RegExg(표현식, 플래그)
const regExp2 = new RegExp("^\d+", "gi");
//// 리터럴 방식
// 표현식
const regexp1 = /^\d+/;
// 표현식 플래그
const regexp2 = /^\d+/gi;

////// test 함수
const message = "안녕하세요. 010-1234-5678로 연락주세요!";
const message2 = "안녕하세요. 연락하지 마세요!";
// 정규표현식 리터럴
const regExp3 = /\d{3}-\d{3,4}-\d{4}/;
console.log(regExp3.test(message));
console.log(regExp3.test(message2));

////// exec 함수
console.log("exec 함수결과", regExp3.exec(message));
console.log("exec 함수결과", regExp3.exec(message2));

////// match 함수
console.log("match 함수결과", message.match(regExp3));
console.log("match 함수결과", message2.match(regExp3));
console.log("match 함수결과", message2.matchAll(/\d{3}-\d{3,4}-\d{4}/g));

////// replace 함수
console.log("replace 함수결과", message.replace(regExp3, "전화번호"));
console.log("replace 함수결과", message2.replace(regExp3, "전화번호"));
console.log("replace 함수결과", message2.replace(/\d{3}-\d{3,4}-\d{4}/g, "전화번호"));

////// serch 함수
console.log("search 함수결과", message.search(regExp3));
console.log("search 함수결과", message2.search(regExp3));

////// capture 함수
console.log("capture 함수결과", message.match(regExp3));

//Run-length encoding
const raw = "AAAAAABBBDFFFFFFFKK";
const compressed = "6A3B1D7F2K";

const regExp = /(.)\1*/g;
const result = raw
.match(regExp)
.reduce((a, b) => a + `${b.length}${b.slice(0, 1)}`, "");

console.log(result);
console.log(result === compressed)

/*
    정규표현식의 Run-length encoding 이용한 개미수열 과제
*/

/*  4 쿠키와 세션, 웹 스토리지 */

//쿠키 관리는 String으로 한다. 값을 추가/제거가 불편하다.
document.cookie = "key=value; key2=value2";

// 데이터를 저장한다.
localStorage.setItem('name', '홍길동');
console.log(localStorage.getItem('name'));

// 데이터를 지운다.
localStorage.removeItem('name');

// 데이터를 전부 지운다.
localStorage.clear();

// 데이터를 저장한다.
sessionStorage.setItem('name', '이선협');
console.log(sessionStorage.getItem('name'));

// 데이터를 지운다.
sessionStorage.removeItem('name');

//데이터를 전부 지운다.
sessionStorage.clear();

/*  6 DOM */