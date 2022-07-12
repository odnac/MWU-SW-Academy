class Node {
    constructor(val = ''){
        this.val = val;
        this.end = false;
        this.child = {};
    }
}

class Trie {
    constructor(){
        this.root = new Node();
    }

    Insert(str){
        let CurrentNode = this.root;
    
        for(let i = 0; i <str.length ; i++) {
            
            const CurrentChar = str[i];
            if(CurrentNode.child[CurrentChar] === undefined) {
                CurrentNode.child[CurrentChar] = new Node(CurrentNode.val + CurrentChar);
            }

            CurrentNode = CurrentNode.child[CurrentChar];
        }
        CurrentNode.end = true
    }

    Search(str) {
        let CurrentNode = this.root;

        for(let i = 0; i <str.length ; i++) {
            const CurrentChar = str[i]; 
            if(CurrentNode.child[CurrentChar]) {
                CurrentNode = CurrentNode.child[CurrentChar];
            } else {
                return '';
            }
        }

        return CurrentNode.val;
    }
}

const MyTrie = new Trie();
MyTrie.Insert("hel");
MyTrie.Insert("hell");
MyTrie.Insert("hello");
MyTrie.Insert("wor");
MyTrie.Insert("world");


console.log("찾기 :", MyTrie.Search("hell"));
console.log("찾기 :", MyTrie.Search("hello"));
console.log("찾기 :", MyTrie.Search("wor"));
console.log("찾기 :", MyTrie.Search(""));
console.log("찾기 :", MyTrie.Search("helloworld"));

// 출처 https://velog.io/@dnrxorla/TIL-DAY-6-JS