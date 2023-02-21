
// You should implement your task here.
function towelSort (matrix){
    let arr=[];
    for (let i = 0; i < matrix.length; i++){
      matrix[i].sort((a,b)=>a-b);
      for (let a = 0; a < matrix[i].length; a++){
        arr.push(matrix[i][a]);
      } 
    } 
    arr.sort((a,b)=>a-b);
    return arr;
  }

module.exports = function towelSort (matrix) {
    return [];
}
