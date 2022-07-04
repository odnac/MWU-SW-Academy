/*  4 변수, 상수, 자료형 그리고 메모리

    과제 : var를 쓰지 않는 이유 호이스팅에 대해 알아보자
    해당 변수의 선언부를 스코프 최상단으로 올려버리는 것
    var는 Function - scoped 이므로 함수 내부의 최상단으로 이동한다.

    즉, 중복 선언이 사능하다.
*/

//변수 let
let aV = 10;
let bV = 10;
let cV = aV+bV

//상수 const
const aC = 1;

//Number
let integer = 126
let float = 1.26
let nan = parseInt('abc')
let inf = 1 / 0

//String
let s1 = "'String'";
let s2 = '"Stirng"';
let s3 = '-${s2}-'; // 백틱 https://curryyou.tistory.com/185
let s4 = 'I\'m String';
console.log(s3); 

//Boolean
let bool1 = true;
let bool2 = false;

//Object
let object = {
    name : "lsm",
    weight : 0,
    registerd : true
};
console.log(object.name);
console.log(object['weight']);

//array
let array = [0,1,2,'a','b'];
console.log(array[0]);
console.log(array[5]);

//Fuction
let func = function () {
    return 1;
}

//undefined null
let a; //undefined
let b = null; //null


/*
   
    메모리
    할당 -> 사용 -> 해제
    Garbage Collector를 통해 메모리 해제
*/

/*  6 표현식과 연산자

    표현식 : 어떠한 결과 값으로 평가되는 식
    연산자 : 할당, 비교, 산술, 비트, 논리, 삼항, 관계, typeof
*/

/*  7 흐름제어 

    Control Flow
    - if
    - switch
    - for
    - while
    - do while
*/

/*  8 배열과 객체 */
//array
const arr1 = new Array();
const arr2 = [];
const arr3 = [1,2,3,4,5];
const arr4 = new Array(5);
const arr5 = new Array(100).fill(100); // 100으로 모두 채운다.
const arr6 = Array.from(Array(5), function (v,k){ // v: 배열의 값 k : 배열의 인덱스
    return k + 2;
})

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(arr6);

//length 길이
console.log(arr1.length);

//join 배열의 모든 요소를 연결해 하나의 문자열로 만듬
console.log(arr3.join(","));

//reverse 배열 역순으로 정렬
console.log(arr3.reverse());

//concat 배열 합치기
console.log(arr1.concat(arr2));

//push, pop 끝 요소 추가, 삭제
arr3.push(7);
arr3.push(8,9);
arr3.pop();
arr3.pop();

//shift, unshift 처음 요소 삭제, 추가
arr3.shift();
arr3.unshift(1);

//slice
console.log(arr3.slice(2,5)); // (시작요소, 끝요소) 시작요소부터 끝요소 - 1 까지 보여줘라

//splice
arr3.splice(2,2); // (2부터, 2개) 삭제

//for of
for(const item of arr3){
    console.log(item);
}

//object 
const obj1 = new Object();
const obj2 = {};
const obj3 = { name : "이승민", age : 25};

//추가
obj3['email'] = "1@naver.com";
obj3.phone = '01012345678';

//삭제
delete obj1.phone;

//키 확인하기
console.log('email' in obj3);
console.log("phone" in obj3);

//키와 벨류 집합 구하기
console.log(Object.keys(obj3));
console.log(Object.values(obj3));

//for in
for(const key in obj3){
    console.log(key, obj3[key]);
}

/*  9 스코프와 클로저 */
