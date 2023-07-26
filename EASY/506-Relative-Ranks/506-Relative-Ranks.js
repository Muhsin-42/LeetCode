var findRelativeRanks = function(score) {
    let sorted = [...score].sort((a,b)=>b-a);
    let res = score.map((ele)=>{
        let index = sorted.indexOf(ele);
        if(index===0) return "Gold Medal"
        if(index===1) return "Silver Medal"
        if(index===2) return "Bronze Medal"
        return index+1+""
    })
    return res
};