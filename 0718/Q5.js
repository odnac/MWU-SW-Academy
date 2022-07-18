// 사전문제 5
const numbers = [0, 1, 2, 3, 4]

for(var i = 0; i < numbers.length; i++) {
  setTimeout(function(){
    console.log(`[${i}] number [${numbers[i]}] turn!`)
  }, i * 1000) 
}

