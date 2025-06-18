/* 
    I/P => A = [1, 2, -1, 3]
    O/P => 5

*/
function FindMaximumSum_BF(A) {
    let maxSum = Number.NEGATIVE_INFINITY;
    for(let i=0; i<A.length; i++){
        for(let j=i; j<A.length; j++){
            let sum = 0;
            for(let k=i; k<=j; k++){
                sum += A[k];
            }
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}

console.log(FindMaximumSum_BF([1, 2, -1, 3]));