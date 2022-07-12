class Tree {
    constructor(val) {
        this.val = val;
        this.leftNode = null;
        this.rightNode = null;
    }
    
    getVal() {
        return this.val;
    }
    
    setVal(val) {
        this.val = val;
    }
    
    setLeftNode(node) {
        this.leftNode = node;
    }
    
    getLeftNode(node) {
        return this.leftNode;
    }
    
    setRightNode(node) {
        this.rightNode = node;
    }
    
    getRightNode(node) {
        return this.rightNode;
    }
    
    // 중위순회
    InOrderTree(node) {
        if(!node) {
            return;
        }
    
        this.InOrderTree(node.leftNode);
        console.log(node.val);
        this.InOrderTree(node.rightNode);
    }
    
    // 전위순회
    preOrderTree(node) {
        if(!node) {
            return;
        }
    
        console.log(node.val);
        this.preOrderTree(node.leftNode);
        this.preOrderTree(node.rightNode);
    }
    
    // 후위순회
    postOrderTree(node) {
        if(!node) {
            return;
        }
    
        this.postOrderTree(node.leftNode);
        this.postOrderTree(node.rightNode);
        console.log(node.val);
    }
}

let root = new Tree(1);
let node = new Tree(2);
root.setLeftNode(node);

node = new Tree(3);
root.setRightNode(node);

node = new Tree(4);
root.leftNode.setLeftNode(node);

node = new Tree(5);
root.leftNode.setRightNode(node);

node = new Tree(6);
root.rightNode.setLeftNode(node);

node = new Tree(7);
root.rightNode.setRightNode(node);

console.log(">>>> InOrder Start!! ");
root.InOrderTree(root);

console.log(">>>> preOrder Start!! ");
root.preOrderTree(root);

console.log(">>>> postOrder Start!! ");
root.postOrderTree(root);


//출 처 https://gogomalibu.tistory.com/55