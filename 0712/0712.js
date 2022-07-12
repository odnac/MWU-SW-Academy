/*  1. 트리 */

////이진 트리
/* 
    0번 인덱스는 편의를 위해 비워둔다.
    Left = Index * 2
    Right = Index * 2 + 1
    Parent = floor(Index / 2)
*/
const treeEx = [
    undefined,
    //1
    9,
    //1*2, 1*2+1
    3, 8,
    //2*2, 2*2+, 3*2,3*2+1
    2, 5, undefined, 7,
    //42*2, 4*2, 5*2, 5*2+1
    undefined, undefined, undefined, 4
];

// 연결리스트로 이진트리 구현
class Node2 {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(node) {
        this.root = node;
    }

    display() {
        const queue = new Queue();
        queue.enqueue(this.root);
        while (queue.size) {
            const currenNode = queue.dequeue();
            console.log(currenNode.value);
            if(currenNode.left) queue.enqueue(currenNode.left);
            if(currenNode.right) queue.enqueue(currenNode.right);
        }
    }
}

const tree = new Tree(new Node2(9));
tree.root.left = new Node2(3);
tree.root.right = new Node2(8);
tree.root.left.left = new Node2(2);
tree.root.left.right = new Node2(5);
tree.root.right.right = new Node2(7);
tree.root.left.right.right = new Node2(4);


/*  2. 힙 */

// 힙 요소 추가
class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);

        while(parentIndex !== 0 && this.heap[parentIndex] < value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop() {
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while(
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
        ){
            if(this.heap[leftIndex] < this.heap[rightIndex]) {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex;
            }
            else {
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex *2 + 1;
        }
        return returnValue;
    }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
// Result is [null, 63, 54, 45, 27, 36]
const array = [];
array.push(heap.pop()); // 63
array.push(heap.pop()); // 54
array.push(heap.pop()); // 45
array.push(heap.pop()); // 36
array.push(heap.pop()); // 27
console.log(array);
// Result is [63, 54, 45, 36, 27] - Heap Sort!


/*  3. 트라이 */
class Node {
    constructor(value = "") {
        this.value = value;
        this.children = new Map();
    }
}
class Trie {
    constructor() {
        this.root = new Node();
    }
    
    insert(string) {
        let currentNode = this.root;
        
        for(const char of string) {
            if(!currentNode.children.has(char)){
                currentNode.children.set(
                    char,
                    new Node(currentNode.value + char)
                );
            }

            currentNode = currentNode.children.get(char);
        }
    }

    has(string) {
        let currentNode = this.root;

        for(const char of string) {
            if(!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char);
        }

        return true;
    }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat")); // true
console.log(trie.has("can")); // true
console.log(trie.has("cap")); // false


/*  4. 정렬 */
// sort
const arraySort = [5,9,10,3,8,3,2];
/* 다음과 같이 그냥 정렬하면 ASCII 문자 순서로 정렬되어
우리가 원하는 숫자 크기대로 정렬되지 않는다. */
arraySort.sort();
console.log(arraySort); // 10, 2, 3, 3, 5, 8, 9
// 10이 먼저 나오는 이유는 ASCII 문자 '1'이 '2'보다 작기 때문이다.

arraySort.sort((a,b) => a - b); // 오름차순 정렬
console.log(arraySort); // 2, 3, 3, 5, 8, 9, 10

arraySort.sort((a,b) => b - a); // 내림차순 정렬
console.log(array); // 10, 9, 8, 5, 3, 3, 2