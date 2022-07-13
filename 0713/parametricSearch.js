function solution(n, times){
    const sortedTimes = times.sort((a,b)=> a-b); // O(n log n)
    let left = 1;   // 최소 1분
    let right = sortedTimes[sortedTimes.length - 1] * n;    // 최대 1억분 * n명

    while(left <= right) {
        const mid = Math.floor((left + right) / 2); // 
        // sum([시간 / 심사시간])
        const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);

        if(sum < n){
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return left;
}