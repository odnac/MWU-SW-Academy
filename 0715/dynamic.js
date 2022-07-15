// 단어 퍼즐 문제
function solution (strs, t) {
    const n = t.length;
    const dp = new Array(n).fill(Infinity);
    
    for(let i = 0; i < n; i++) {
      const current = t.substr(0, i+1);
      
      for(const str of strs) {
        if (current.endsWith(str)) {
          const diff = current.length - str.length;
          
          if (!diff) {
            dp[i] = 1;
          } else {
            dp[i] = Math.min(dp[i], dp[diff-1] + 1);
          }
        }
      }
    }
    return dp[n-1] === Infinity ? -1 : dp[n-1];
}