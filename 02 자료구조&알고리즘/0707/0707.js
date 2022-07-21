/*  4 배열 */

//// 배열 생성
// 빈 Array를 생성할 수 있습니다.
let arr1 = [];
console.log(arr1);

// 미리 초기화된 Array를 생성할 수 있습니다.
let arr2 = [1,2,3,4,5];
console.log(arr2);

// 많은 값을 같은 값으로 초기화할 경우 fill을 쓸 수 있습니다.
let arr3 = Array(10).fill(0);
console.log(arr3);

//특정 로직을 사용하여 초기화 할 경우 from을 사용할 수 있습니다.
let arr4 = Array.from({ length: 100}, (_, i) => i);
console.log(arr4);


//// 배열 요소 추가, 삭제
const arr = [1,2,3];
console.log(arr);

// 4가 끝에 추가됩니다.
arr.push(4); // O(1)

// 여러 개를 한 번에 추가할 수 있습니다.
arr.push(5,6); //O(1)
console.log(arr);

// 3번 인덱스에 128을 추가합니다.
arr.splice(3,0,128); //O(n) splice(배열의 변경을 시작할 인덱스, 배열에서 제거할 요소의 수, 추가할 요소)
console.log(arr);

// 3번 인덱스 값을 제거합니다.
arr.splice(3,1); // O(n)
console.log(arr[3]);


//// 특이점
const arr5 = [];
console.log(arr5);
arr5.push(1);
arr5.push(1);
arr5.push(2);
arr5.push(3);
console.log(arr5);

// 자바스크립트의 Array는 HashMap에 가깝습니다.
console.log(arr.length);

// index가 number가 아니어도 됩니다.
arr5["string"] = 10;
arr[false] = 0;
console.log(arr5);
console.log(arr5.length);
arr[4] = 5;
console.log(arr5.length);

