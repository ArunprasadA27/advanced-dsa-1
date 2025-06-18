/* 1. Brute Force 1
--------------------
    I/P => A = [1, 2, -1, 3]
    O/P => 5
    T.C     => O(N^3) - since 3 loops are running 
    S.C     => O(1)
*/
function FindMaximumSum_BF1(A) {
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

// console.log('Brute Force - 1 ', FindMaximumSum_BF1([1, 2, -1, 3]));
// --------------------------------------------------------------------------------------------------------------------------------------------------

/* 2. Brute Force 2
--------------------
    I/P     => A = [1, 2, -1, 3]
    O/P     => 5
    T.C     => O(N^2)
    S.C     => O(1)
*/
function FindMaximumSum_BF2(A) {
    let maxSum = Number.NEGATIVE_INFINITY;
    for(let i=0; i<A.length; i++){
        let currSum = 0;
        for(let j=i; j<A.length; j++){
            currSum += A[j];
            maxSum = Math.max(maxSum, currSum);
        }
    }
    return maxSum;
}

// console.log('Brute Force - 2 ', FindMaximumSum_BF2([1, 2, -1, 3]));
// --------------------------------------------------------------------------------------------------------------------------------------------------
/* 3. Brute Force 2
--------------------
    I/P => A = [1, 2, -1, 3]
    O/P => 5
*/