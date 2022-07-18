// 명령형
function double(arr) {
    let results = []
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            results.push(arr[i] * 2)
        }
    }
    return results
}

document.querySelector('body').innerHTML = double([1, 2, 3]);

// 선언형
function double(arr) {
    return arr
            .fillter(param => typeof param === 'number')
            .map(number => number * 2)
}

document.querySelector('body').innerHTML = double([3, 4, 5]);