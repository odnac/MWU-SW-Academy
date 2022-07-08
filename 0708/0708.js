/*  
    1 스택 
*/

function sum(a, b) {
    return a + b;
}
function print(value) {
    console.log(value);
}
print(sum(5,10));

//// Array로 구현
console.log("Array로 Stack 구현");
const Astack = [];
//push
Astack.push(1);
Astack.push(2);
Astack.push(3);
console.log(Astack);
//pop
Astack.pop();
console.log(Astack);
//Get Top
console.log(Astack[Astack.length-1]);

//// Linked List로 구현
console.log("Linked List로 Stack 구현");
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value); // 추가 할 노드
        node.next = this.top; // 추가 할 노드에 탑이 가르키도록 해라.
        this.top = node; // 이게 무슨 의미지?
        this.size += 1; // 사이즈 증가
    }

    pop() {
        const value = this.top.value;
        this.top = this.top.next;
        this.size -= 1;
        return value;
    }

    size() {
        return this.size;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());

/* 
    4 Queue 
*/

//// 선형 큐 Array로 구현
//간단해서 코테에서 사용하기 좋음
console.log("Array로 선형 Queue 구현");
class QueueArray {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }
    peek() {
        return this.queue[this.front];
    }
    sizeQ() {
        return this.rear - this.front;
    }
}
const queueArray = new QueueArray();
queueArray.enqueue(1);
queueArray.enqueue(2);
queueArray.enqueue(4);
console.log(queueArray.dequeue());
queueArray.enqueue(8);
console.log(queueArray.sizeQ());
console.log(queueArray.peek());
console.log(queueArray.dequeue());
console.log(queueArray.dequeue());

//// 선형 큐 Linked List로 구현
console.log("Linked List로 선형 Queue 구현");
class NodeL{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class QueueList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(newValue) {
        const newNode = new NodeL(newValue);
        if(this.head === null) {
            this.head = this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
    }
    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;
        return value;
    }
    peek(){
        return this.head.value;
    }
}
const queueList = new QueueList();
queueList.enqueue(1);
queueList.enqueue(2);
queueList.enqueue(4);
console.log(queueList.dequeue());
queueList.enqueue(8);
console.log(queueList.size);
console.log(queueList.peek());
console.log(queueList.dequeue());
console.log(queueList.dequeue());

/* shift함수는 쓰지 마세요!

    const queue = [1,2,3];
    queue.push(4);
    const value = queue.shift(); // O(n) !!
    console.log(value); // 1
*/

//// 환형 큐 Array로 구현
console.log("Array로 환형 Queue 구현");
class CQueue {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }
    enqueue(value) {
        if(this.isFull()) {
            console.log("Queue is full.");
            return;
        }
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.maxSize;
        this.size += 1;
    }
    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        this.size -= 1;
        return value;
    }
    isFull() {
        return this.size === this.maxSize;
    }
    peek() {
        return this.queue[this.front];
    }
}
const cqueue = new CQueue(4);
cqueue.enqueue(1);
cqueue.enqueue(2);
cqueue.enqueue(4);
cqueue.enqueue(8);
cqueue.enqueue(16);
console.log(cqueue.dequeue());
console.log(cqueue.dequeue());
console.log(cqueue.size);
console.log(cqueue.peek());
cqueue.enqueue(16);
cqueue.enqueue(32);
console.log(cqueue.isFull());

/* 
    7. 해시 테이블
*/

// Array 해시 테이블    <= 추천 안함
const tableA = [];
Atable["key"] = 100;
Atable["key2"] = "Hello";
console.log(Atable["key"]); // 100
Atable["key"] = 349;
console.log(tAable["key"]); //349
delete Atable["key"];
console.log(Atable["key"]); // undefined

// Object 해시 테이블   <= 제일간단하고 정석적인 방법
const tableO = {};
tableO["key"] = 100;
tableO["key2"] = "Hello";
console.log(tableO["key"]); // 100
tableO["key"] = 349;
console.log(tableO["key"]); // 349
delete tableO["key"];
console.log(tableO["key"]); // undefined

// Map 해시 테이블  
const tableM = new Map();
tableM.set("key", 100);
tableM.set("key2", "Hello");
console.log(tableM["key"]); //undefined
console.log(tableM.get("key")); //100
const object = {a:1};
tableM.set(object, "A1"); // Map은 Object도 Key로 쓸 수 있다.
console.log(tableM.get(object)); // A1
tableM.delete(object);
console.log(tableM.get(object)); // undefined
console.log(tableM.keys()); // {'key','key2'}
console.log(tableM.values()); // {100,'Hello'}
tableM.clear();
console.log(tableM.values()); // { }

// Set 해시 테이블
const tableS = new Set();
tableS.add("key"); // key와 value가 동일하게 들어간다
tableS.add("key2");
console.log(tableS.has("key")); // true
console.log(tableS.has("key3")); // false
tableS.delete("key2");
console.log(tableS.has("key2")); // false
tableS.add("key3");
console.log(tableS.size); // 2
tableS.clear();
console.log(tableS.size); // 0



