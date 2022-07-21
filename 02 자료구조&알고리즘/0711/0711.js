/*
    3. 그래프
*/

//인접 행렬
const graphA = Array.from(
    Array(5), 
    () => Array(5).fill(false)
);
graphA[0][1] = true; // 0- > 1
graphA[0][3] = true; // 0- > 3
graphA[1][2] = true; // 1 -> 2
graphA[2][0] = true; // 2- > 0
graphA[2][4] = true; // 2- > 4
graphA[3][2] = true; // 3- > 2
graphA[4][0] = true; // 4- > 0

//인접 리스트
const graphL = Array.from(
    Array(5),
    () => []
);
graphL[0].push(1); // 0 -> 1
graphL[0].push(3); // 0 -> 3
graphL[1].push(2); // 1 -> 2
graphL[2].push(0); // 2 -> 0
graphL[2].push(4); // 2 -> 4
graphL[3].push(2); // 3 -> 2
graphL[4].push(0); // 4 -> 0