//네트워크 문제
function dfs(n, computers, visited, start) {
    const stack = [start]; // DFS의 시작점을 미리 초기화 합니다.

    while (stack.length > 0) { // 탐색이 끝날 때 까지 루프를 돌립니다.
        const curr = stack.pop(); // 요소를 하나 뽑습니다.

        visited[curr] = true; // 이미 탐색한 곳은 다음에 탐색을 방지하기 위해 체크합니다.

        for (let i = 0; i < n; i += 1) { // 탐색 가능한 곳을 찾습니다.
            if (!visited[i] && computers[curr][i]) {
                stack.push(i); // 가능하다면 스택에 추가합니다.
            }
        }
    }
}

function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false); // 방문한 노드를 기록하기 위한 배열을 선언합니다.

    for (let i = 0; i < n; i += 1) { // 노드 수 만큼 루프를 돌립니다.
        if (!visited[i]) { // 아직 방문하지 않은 곳이 있다면
            dfs(n, computers, visited, i); // 탐색합니다.
            answer += 1; // 영역 하나를 찾았으므로 하나 더해줍니다.
        }
    }

    return answer;
}