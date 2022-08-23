/*
 * 타입스크립트
 * 
 * 장점 : 타입이 있음.
 * 안정성 - 컴파일 단계에서 미리 오류를 감지할 수 있다.
 * 가독성 - 타입을 보고 무엇을 하는지 미리 알 수 있다.
 * 
 * 단점 
 * 초기 설정을 해야한다.
 * 스크립트 언어의 유연성이 낮아진다.
 * 컴파일 시간이 길어질 수 있다.
*/

/*
 * 1. 타입 주석과 타입 추론
 * 
 * 타입 주석은 변수, 상수 혹은 반환 값이 무슨 타입인지를 나타내는 것을 의미
 * 타입 추론은 해당 변수가 어떤 타입인지 추록하는 것. 생략하면 컴파일 타임에 알아낸다.
*/

let a: number = 1; 
let b = 2;
let c: boolean = false
let d: string = 'TypeScript'
let f = { a: 1 }
let h: number[] = []
let i: 'good' = 'good'
let g: any = 3

function add(a: number, b:number): number {
    return a + b
}

/*
 * 2. 인터페이스
 *
 * 객체의 타입을 정의하는 방법, interface라는 키워드로 가능하다.
*/

interface Company {
    name: string;
    age: number;
    address?: string; // 선택 속성, 보통 Optional이라 부른다.
}

const cobalt: Company = {
    name: 'Cobalt, Inc.',
    age: 3,
    address: 'Seoul'
}
console.log(cobalt) // Cobalt, Inc. 3 Seoul

const person: { // 익명 인터페이스
    name: string,
    age?: number
} = {
    name: 'Lee',
    age: 100
}

/*
 * 3. tuple
 *
 * 배열을 Tuple로 이용하는 방법
*/

const tuple: [string, number] = ['Lee', 100]
console.log(tuple[0]) // Lee
console.log(tuple[1]) // 100 

/*
 * 4. enum
 *
 * 열거형을 사용하는 방법
*/

enum Color {
    RED,
    GREEN,
    BULE
}

const color = Color.BULE;
if(color === Color.BULE){
    // todo
}

/*
 * 5. 대수 타입
 *
 * 여러 자료형의 값을 가질 수 있게하는 방법
 * 합집합 타입과 교집합 타입이 있다.
*/

let numOrStr: number | string = 1;
numOrStr = 'str'
// 오류 : 다른 타입이 들어가면 안됨
//numOrStr = false

// let numAndStr: number & string = ''; // 원시 타입에서 사용할 수 없다.

interface Name {
    name: string
}

interface Age {
    age: number
}

let leee: Name & Age = {
    name: 'LEEEEEEE',
    age: 100
}

let leee2: Name | Age = {
    name: 'LEEEEEEE2',
}

type Person = Name & Age
let julia: Person = {
    name: 'julia',
    age: 100
}

/*
 * 6. Optional
 *
 * ES 2021에도 추가된 기능, 타입스크립트는 이미 있었다.
*/

interface Post {
    title: string;
    content: string;
}

interface ResposeData {
    post?: Post;
    message?: string;
    status: number;
}

const response: ResposeData[] = [
    {
        post: {
            title: 'Hello',
            content: 'How are you?'
        },
        status: 200
    },
    {
        message: 'Error!',
        status: 500
    }
]

//console.log(response[0].post.title); // Hello
console.log(response[1].post && response[1].post.title); // undefined
console.log(response[1].post?.title); // 데이터가 없다면 자동으로 undefined를 반환한다.

/*
 * 7. Generic
 *
 * 하나의 인터페이스로 여러 타입을 이용할 수 있게 하는 방법
*/

interface Value<T> {
    value: T;
}

const value: Value<string> = {
    value: '1'
}

function toString<T>(a: T): string {
    return `${a}`;
}

console.log(toString<string>('5')); //5
console.log(toString('5')); //5

/*
 * 8. Partial, Required, Pick, Omit
 *
 * 기존 interface를 재활용 할 수 있게 만든다.
*/

interface User {
    id: number,
    name: string;
    age: number
    address: string
    createdAt?: string
    updatedAt?: string
}

//모든 필드가 Optionl이 된다.
const partial: Partial<User> = {}

// 모든 필드가 Required가 된다.
const required: Required<User> = {
    id: 1,
    name: 'Lee',
    age: 0,
    address: 'Seoul',
    createdAt: '',
    updatedAt: ''
}

// 특정 필드만 골라서 사용할 수 있다.
const pick: Pick<User, 'name' | 'age'> = {
    name: '',
    age: 0
}

// 특정 필드만 빼고 사용할 수 있다.
// const omit = Omit<User, 'id'| 'createdAt'> = {
//     name: 'Lee',
//     age: 0,
//     address: 'Seoul',
//     updatedAt: ''
// }

// const mixed: Omit<User, 'id' | 'address' | 'age' | 'createdAt' | 'updateAt'> & Pick<User, 'address' | 'age'> = {
//     name: '',
// }

/*
 * 9. extends
 *
 * 특정 인터페이스를 상속받아 인터페이스를 확장할 수 있다.
*/

interface Time {
    hour: number;
    minute: number;
    second: number;
}

interface DateTime extends Time {
    year: number;
    month: number;
    day: number;
}

interface OffsetDateTime extends DateTime {
    offset: number;
}

interface ZonedDateTime extends DateTime {
    zoneId: string
}

interface TimeFormat extends Pick<Time, 'hour' | 'minute'>{
    ampm: 'am' | 'pm'
}

const timeFormat: TimeFormat = {
    hour: 10,
    minute: 30,
    ampm: 'am'
}