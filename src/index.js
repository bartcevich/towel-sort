
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === [] || matrix == null) {
        return [];
    }
    let arr = [];
    for (let i = 0; i < matrix.length; i++){
      if(i%2===0){
        for (let a = 0; a < matrix[i].length; a++){
          arr.push(matrix[i][a]);
         } 
      }else{
        for (let a = matrix[i].length-1; a >= 0 ; a--){
          arr.push(matrix[i][a]);
        }
      }
    } 
    return arr;
}
