// 사전문제 2
(function(name){
    console.log(`hello ${name}`)
})('roto')  // hello roto
/* 
    1. 함수가 선언되기만 하고 아무 일도 일어나지 않는다.
    2. 'hello'만 출력이 된다.
    3. 'hello roto'가 출력된다.
    4. 오류가 발생한다.
	=> 3. 'hello roto'가 출력된다.
*/

// 관련 예시
const logger = (function(){
    // logCount는 밖에서 접근할 수 없다. 일종의 private 효과
    let logCount = 0;
    function log(message) {
        console.log(message);
        logCount = logCount + 1;
    }
    function getLogCount() {
        return logCount;
    }
    return {
        log: log,
        getLogCount: getLogCount
    }
})()

logger.log('punk rock band Idiots!') // punk rock band Idiots!
logger.log('bye bye') // bye bye

console.log(logger.getLogCount()); // 2
console.log(logger.logCount); // undefined