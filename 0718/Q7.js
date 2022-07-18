// 클로져란?
function outterFunction() {
    const name = 'roto'

    return function () {
        alert(name)
    }
}

const printName = outterFunction()
printName()

// 클로져를 이용한 private 효과
function Counter() {
	let count = 0;
	
	function increase() {
		count++;
	}
	function printCount() {
		console.log(`count : ${count}`)
	}
	return {
		increase,
		printCount
	}
}

const counter = Counter()

counter.increase()
counter.increase()
counter.increase()
counter.increase()
counter.printCount()

//외부에서는 Counter 함수 내의 count에 접근 불가
console.log(counter.ount)