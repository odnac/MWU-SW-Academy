/* 1. 트리 */

////이진 트리
/* 
    0번 인덱스는 편의를 위해 비워둔다.
    Left = Index * 2
    Right = Index * 2 + 1
    Parent = floor(Index / 2)
*/
const tree = [
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
class Node {
    constructor(value) {
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
        //Level Order
        const queue = new Quueue();
        queue.enqueue(this.root);
        while(queue.size) {
            const currentNode = queue.dequeue();
            console.log(currentNode.value);
            if(currentNode.left) queue.enqueue(currentNode.left);
            if(currentNode.right) queue.enqueue(currentNode.right);
        }
    }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.rigth = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);
