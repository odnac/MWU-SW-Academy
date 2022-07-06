//// SinglyLinkedList
//노드
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // 찾기
    find(value) {
        let currNode = this.head;
        while (currNode.value !== value) {
            currNode = currNode.next;
        }
        return currNode;
    }
    // 마지막에 추가
    append(newValue) {
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
    // 중간 삽입
    insert(node, newValue) {
        const newNode = new Node(newValue);
        newNode.next = node.next;
        node.next = newNode;
    }
    // 삭제
    remove(value) {
        let prevNode = this.head;
        while(prevNode.next.value !== value) {
            prevNode = prevNode.next;
        }

        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }
    
    display() {
        let currNode = this.head;
        let displayStirng = "[";
        while(currNode !== null) {
            displayStirng += `${currNode.value}, `;
            currNode = currNode.next;
        }
        displayStirng = displayStirng.substr(0, displayStirng.length-2);
        displayStirng += "]";
        console.log(displayStirng);
    }
    //리스트의 크기를 구하는 메소드
    size() {

    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(5);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.remove(3);
linkedList.display();