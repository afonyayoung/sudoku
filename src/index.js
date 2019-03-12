module.exports = function solveSudoku(matrix) {
  // your solution
  function isSafe(matrix, row, col, num){
    for (var d=0; d<matrix.length; d++){
      if(matrix[row][d]==num){
        return false
      }
    }
    for (var r=0; r<matrix.length; r++){
      if(matrix[r][col]==num){
        return false;
      }
    }
    var boxRowStart = Math.floor(row - row % 3);
    var boxColStart = Math.floor(col - col % 3);
    for (r = boxRowStart; r<boxRowStart+3; r++){
      for(d = boxColStart; d < boxColStart + 3; d++){
        if (matrix[r][d] == num)  
          { 
              return false; 
          } 
      }
    }
    return num;
  }
  var row;
  var col;
  var empty = true;
  for (var i = 0; i<matrix.length; i++){
    for (var j = 0; j< matrix.length; j++){
      if(matrix[i][j] == 0){
        row = i;
        col = j;
        empty = false;
        break;
      }
    }
    if (!empty){ 
          break; 
    } 
  }
  if (empty){
    console.log(matrix);
    return true;
    
  }
  for (var num=1; num <= matrix.length; num++){
    if (isSafe(matrix,row, col, num)){
      matrix[row][col] = num;
     if (solveSudoku(matrix)){
        return matrix;
        } else {
        matrix[row][col] = 0;
      }
    } 
  }
}
