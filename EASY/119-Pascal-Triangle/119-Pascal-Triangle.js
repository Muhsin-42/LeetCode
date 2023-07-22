/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let pasc=[];
    for(let i=0; i<numRows;i++){
        for(let j=0; j<=i ; j++){
            if(j===0) pasc.push([1]);
            else if(j===i) pasc[i].push(1)
            else pasc[i].push(pasc[i-1][j-1]+pasc[i-1][j])
        }
    }
    return pasc 
}; 