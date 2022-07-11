class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(newValue) {
        const newNode = new Node(newValue);
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek() {
        return this.head.value;
    }
}

function solution(priorities, location) {
    const queue = new Queue();
    
    for(let i = 0 ; i < priorities; i+=1){
        queue.enqueue([priorities[i], i]); // 인덱스와 우선순위를 넣어준다.. enqueue의 매개변수는 1개인데 이게 돼?
    }
    //내림차순 정렬
    priorities.sort((a,b) => b - a);
    // priorties.sort(function(a,b) { return b - a });
    
    let count = 0 ;
    while(true) {
        const currentValue = queue.peek();
        if(currentValue[0] < priorities[count]){
            queue.enqueue(queue.dequeue());
        }
        else{
            const value = queue.dequeue();
            count += 1;
            if(location === value[1]){
                return count;
            }
        }
    }

}