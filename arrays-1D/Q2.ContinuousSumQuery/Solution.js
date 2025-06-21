/* 1. Brute Force method 
-------------------------
    I/P =>  A = 5
            B = [[1, 2, 10], [2, 3, 20], [2, 5, 25]]
    O/P => [10, 55, 45, 25, 25]
    T.C     => O(N × Q)
    S.C     => O(A)
*/

function BruteForce1(A, B){
    let result = new Array(A).fill(0);

    for(let i=0; i<B.length; i++){
        let l = B[i][0];
        let r = B[i][1];

        for(let j=l-1; j<=r-1; j++){
            result[j] = result[j] + B[i][2];
        }
    }
    return result;

}
// console.log('Brute Force - 1 Solution', BruteForce1(5, [[1, 2, 10], [2, 3, 20], [2, 5, 25]]));
// ----------------------------------2. Optimized solution----------------------------------------------------------------------------------------------------------------

function ContinuousSumQuery(A, B){
    let result = new Array(A).fill(0);
    let newResult = new Array(A).fill(0);

    for(let i=0; i<B.length; i++){
        let l = B[i][0];
        let r = B[i][1];
        
        result[l-1] = result[l-1] + B[i][2];
        if(r < A){
            result[r] = result[r] - B[i][2];
        } 
    }

    newResult[0] = result[0];
    for(let i=1; i<result.length; i++){
        newResult[i] = newResult[i-1] + result[i]; 
    }

    return newResult;
}
console.log('Optimized Solution - ', ContinuousSumQuery(5, [[1, 2, 10], [2, 3, 20], [2, 5, 25]]));
// ----------------------------------2. Optimized solution----------------------------------------------------------------------------------------------------------------