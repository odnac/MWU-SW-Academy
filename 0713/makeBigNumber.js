//sol1
function solution1(number, k) {
    const stack = [];
    let count = 0;

    for(const item of number){
        while(count < k && stack[stack.length - 1] < item){
            stack.pop();
            count += 1;
        }
        stack.push(item);
    }

    while(count < k) {
        stack.pop();
        count += 1;
    }

    return stack.join("");
}

//sol2
function solution2(number, k) {
    const stack = [];
  
    number = number.split('');
  
    for(let i = 0; i<number.length; i +=1){
  
      //스택의 길이가 0일 경우, 비교할 값이 없다는 말이기 때문에 스택에 값을 넣는다.
      //1924를 넣으면 첫 값인 1은 비교할 값이 없기 때문에 스택의 첫 값에 들어가게 된다.
      if(stack.length ===0){
        stack.push(number[i]);
        continue;
      }
  
      //스택의 맨 위에 있는 값과 number[i]를 비교
      //number[i]가 스탯의 맨 윗 값보다 크면 pop
      //pop할때 k값 감소
      //1924의 경우 두번째 값 9와 이미 들어간 1이 비교, 1은 pop되고 9가 들어가게 됨, k값 1 감소
  
      while(k>0 && stack[stack.length-1]<number[i]){
        stack.pop();
        k--;
      }
  
      stack.push(number[i]);
    }
  
    return stack.join('').substring(0,stack.length-k);
  }
  
  console.log(solution("19245487", 2));
  
  //[1] ::i=0
  //[1] <- 9 :: i=1
  //[9] pop 1 :: k=1
  //[9] <- 2 :: i=2
  //[9, 2] 
  //[9, 2] <-4 ::i=3
  //[9, 4] pop 2 :: k=0, 
  //값 반환