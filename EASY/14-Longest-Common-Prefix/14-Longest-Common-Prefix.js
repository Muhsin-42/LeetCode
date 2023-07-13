
var longestCommonPrefix = function(strs) {
    let arr = strs.map((str)=>str.length)
    let min = Math.min(...arr)
    let flag = 0;
    let res = [];
    for(let j = 0; j<min; j++){
        let curr = strs[0][j];
        for(let i=0; i< strs.length; i++){
            if(strs[i][j]!=curr)
            {
                flag=1;
                break;
            }
        }
        if(flag) break
         res.push(strs[0][j])  
    }
    return res.join('')

};