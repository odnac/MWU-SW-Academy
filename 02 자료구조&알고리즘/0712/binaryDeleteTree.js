class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return ;
        }
        let currenNode = this.root;
        while(currenNode !== null) {
            if(currenNode.value < value){
                if(currenNode.right === null) {
                    currenNode.right = newNode;
                    break;
                }
                currenNode = currenNode.right;
            }
            else{
                if(currenNode.left === null) {
                    currenNode.left = newNode;
                    break;
                }
                currenNode = currenNode.left;
            }
        }
    }

    delete(value){
        let currenNode = this.root;
        // 리프 노드 일 경우
        if(currenNode.left === null && currenNode.right ===null){
            currenNode = null;
            return currenNode;
        }
        // 자식이 하나뿐인 노드
        // 자식이 둘인 노드
    }

    has(value){
        let currenNode = this.root;
        while(currenNode !== null) {
            if(currenNode.value === value){
                return true;
            }
            if(currenNode.value < value){
                currenNode = currenNode.right;
            }
            else{
                currenNode = currenNode.left;
            }
        }
        return false;
    }
}

const tree = new binarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);
console.log(tree.has(8)); // true
console.log(tree.has(1)); // false
console.log(tree.has(2)); // true
tree.delete(2);
console.log(tree.has(2)); // 리프노드 삭제가 안됐다.