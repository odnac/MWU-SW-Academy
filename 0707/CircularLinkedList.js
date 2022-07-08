//노드
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
    }
    // 찾기
    find(value) {
        try{
            let currNode = this.head;
            while (currNode.value !== value) {
                currNode = currNode.next;
            }
            return currNode;
        }
        catch(e) {
            console.log("찾는 값이 노드에 없습니다.");
        }
    }
    // 마지막에 추가
    append(newValue) {
        const newNode = new Node(newValue);
        if(this.head == null) {
            this.head = newNode;
        }
        else {
            while(currNode.next != this.head) {
                currNode = currNode.next;
            }
            currNode.next = node;
        }
        newNode.next = this.head;
        this.size++;
    }
    // 중간 삽입
    insert(node, newValue) {
        try {
            const newNode = new Node(newValue);
            newNode.next = node.next;
            node.next = newNode;
        }
        catch(e){
            console.log("값이 맞는 노드가 없어 새로운 값을 삽입하지 못하였습니다.");
        }
      
    }
    // 삭제
  
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
        let count = 0;
        let currNode = this.head;
        while(currNode != null) {
            currNode = currNode.next
            count++;
        }
        console.log(count);
    }
}

const linkedList = new CircularLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(122));
linkedList.remove(5);
linkedList.display();
linkedList.insert(linkedList.find(1221), 4);
linkedList.remove(100);
linkedList.display();
linkedList.size();