//노드
class Node {
    constructor(value) {
        this.prev = null; // 추가
        this.value = value;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    //노드 양 끝 추가
    frontInsert(newValue) {
        const newNode = new Node(newValue);// 새로 삽입할 노드를 만들고
        if(this.head == null){
            this.tail = newNode;
            this.head = newNode;
        }
        else {
            let temp = new Node(newValue);
            temp.next = this.head;
            this.head.prev = temp;
            this.head = temp;
            this.head.prev = null;
            
            // 오류 코드
            // this.head.prev = newNode.next; // 기존 head노드의 prev에 newNode의 next로 바꿔야한다.
            // const temp = this.head.prev // 기존 haed 노드의 prev를 temp에 저장한다.
            // this.head = newNode; // head가 새로운 노드를 가르키게 만든다.
            // this.head.next = temp; //아까 저장한 temp의 값을 새로운 head의 next에 넣는다.
            // // this.head.prev = null; // 새로운 노드의 이전은 없으므로 prev는 null이다.
        }
        this.size++;
    }
    backInsert(newValue) {
        const newNode = new Node(newValue);// 새로 삽입할 노드를 만들고
        if(this.head == null){
            this.tail = newNode;
            this.head = newNode;
        }
        else {
            let temp = new Node(newValue);
            temp.prev = this.tail;
            this.tail.next = temp;
            this.tail = temp;
            this.tail.next = null;

            // 오류 코드 
            // this.tail.next = newNode.prev; // 기존 tail노드의 next에 newNode의 prev로 바꿔야 한다.
            // const temp = this.tail; // tail 노드의 next를 temp에 저장한다.
            // this.tail = newNode; // tail이 새로운 노드를 가르키게 만들고
            // this.tail.prev = temp; // 아까 저장한 temp의 값을 새로운 tail의 prev에 넣는다.
            // this.tail.next = null; // 새로운 노드의 다음은 없으므로 next는 null이다.
        }
        this.size++;
    }
    //노드와 노드 사이에 추가
    insertMiddle(index, newValue) {
        const newNode = new Node(newValue);
        if(this.head == null){
            this.tail = newNode;
            this.head = newNode;
        }
        else if(this.size == 1){
            //생성된 노드가 1개 있을 때 사용자에게 head에 추가할지 tail에 추가할지 선택해야함.
        }
        else {
            //사이 추가 코드
        }
        this.size++;
    }
    //삭제
    //탐색
    findFromHead(value) {
        try{
            let current = this.head;
            while(current.value !== value) {
                current = current.next;
            }
            console.log("찾는 값",value,"이(가) 노드에 있습니다.");
        }
        catch(e) {
            console.log("찾는 값",value,"이(가) 노드에 없습니다.");
        }
    }
    findFromTail(value) {
        try {
            let current = this.tail;
            while(current.value !== value) {
                current = current.prev;
            }
            console.log("찾는 값",value,"이(가) 노드에 있습니다.");
        }
        catch(e) {
            console.log("찾는 값",value,"이(가) 노드에 없습니다.");
        }
    }
    //전체 노드 보기
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
}

const DlinkedList = new DoublyLinkedList();
//리스트 삽입 삭제
DlinkedList.backInsert(30);
DlinkedList.frontInsert(20);
DlinkedList.backInsert(40);
DlinkedList.frontInsert(10);
//여기부터 출력
console.log("리스트의 크기 :", DlinkedList.size);
DlinkedList.findFromTail(30);
DlinkedList.findFromTail(500);
DlinkedList.findFromHead(30);
DlinkedList.findFromHead(600);
DlinkedList.display();