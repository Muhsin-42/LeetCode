const checkGrid = (grid,r,c,v) => {
    const gr = Math.floor(r/3);
    const gc = Math.floor(c/3);
    if(grid[`${gr}${gc}`][v]) return false;
    else grid[`${gr}${gc}`][v] = true;
    return true;
}

const checkRows = (rows,r,v) =>{
    if(rows[r][v]) return false
    else rows[r][v] = v;
    return true;
}
const checkCols = (rows,r,v) =>{
    if(rows[r][v]) return false
    else rows[r][v] = v;
    return true;
}

const validSudoku = (board) =>{
    let grid = {
        '00':{},'01':{},'02':{},
        '10':{},'11':{},'12':{},
        '20':{},'21':{},'22':{}
    }
    let rows = [
        {},{},{},
        {},{},{},
        {},{},{}
    ]
    let cols = [
        {},{},{},
        {},{},{},
        {},{},{}
    ]

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            if(board[i][j]!=='.'){
                if(!checkGrid(grid,i,j,board[i][j]))
                {
                    return false
                }
                if(!checkRows(rows,i,board[i][j]))
                {
                    return false
                }
                if(!checkCols(cols,j,board[i][j]))
                {
                    return false
                }
            }
        }
    }
    return true;
}

console.log(validSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))