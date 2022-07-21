function solution(s) {
    const stack = [];

    for(const c of s) {
        if(c === '(') {
            stack.push(c);
        }
        else {  // ')' 일때
            if(stack.length === 0){ // 만약 스택에 남은 '('가 없으면 false
                return false;
            }
            stack.pop(); // 스택에 남은 '('가 있으면 true
        }
    }
    return stack.length === 0; // 참이면 true, 거짓이면 false
}
//스택 없이 더 최적화 된 코드
function solution2(s) {
    let count = 0 ;

    for( const c of s){
        if(c === '(') {
            count++;
        }
        else {
            if(count === 0) {
                return false;
            }
            count--;
        }
    }
    return count === 0;
}
