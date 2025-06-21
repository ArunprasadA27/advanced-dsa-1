/*
    Inputs: 
        A   =   [[1, 2, 3]  A-> Matrix to search.
                [4, 5, 6]
                [7, 8, 9]]

        B   =   2           B-> Value to be searched in the matrix.
        TC  = 
        SC  = 
*/

function SearchRowiseColumnWiseSortedMatrix(A, B){
    let i = 0;
    let j = A[0].length - 1;

    let minValue = Number.POSITIVE_INFINITY;
    while(i < A.length && j >= 0 ){
        let calValue = 0;
        if(A[i][j] === B){
            calValue = (i+1) * 1009 + (j+1);
            minValue = Math.min(calValue, minValue);
            j--;
        } else if( A[i][j] > B){
            j--;
        } else{
            i++;
        }
    }
    if(minValue == Number.POSITIVE_INFINITY){
        return -1;
    }
    return minValue;
}
console.log("Search row wise column wise sorted matrix - ", SearchRowiseColumnWiseSortedMatrix([[1, 2, 3],[4, 5, 6],[7, 8, 9]], 5));
//console.log("Search row wise column wise sorted matrix - ", SearchRowiseColumnWiseSortedMatrix([[2]], 2));
