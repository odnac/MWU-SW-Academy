// 사전문제 1
function Cat(name, age){
	this.name = name;
	this.age = age;
}

const tabby1 = Cat('nana', 7);
console.log(tabby1.name);
/* 
    1. 'nana'가 출력된다.
    2. 빈 문자열이 출력된다.
    3. undefined가 출력된다.
    4. 오류가 발생한다.
	=> 4. 오류가 발생한다.
*/