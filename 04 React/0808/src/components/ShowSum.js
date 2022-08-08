import { useMemo } from "react";

function sum(n) {
    console.log('Start');
    let result = 0;
    for(let i = 1; i <= n; i +=1){
        result += i;
    }
    console.log('Finished')
    return result
}

const ShowSum = ({ label, n }) => {
    // const result = sum(n)
    const result = useMemo(() => sum(n), [n]);
    return (
        <span>
            {label}: {result}
        </span>
    )
}

export default ShowSum