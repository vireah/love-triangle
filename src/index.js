/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let arr=[];
  let a;
  let b;
  let m = 0;
  let len = preferences.length;
  for (let j = 1; j < len; j++) {
    for(let  i = 0; i < len; i++) {
      if(j === preferences[i]){
        a = i+1;
        for(let k = 0; k < len; k++){
          if(a === preferences[k]){
             b = k+1;
             for(let g = 0; g < len; g++){
             if(b === preferences[j-1]){
              { arr[m] = [b, j, a]
                 m++;
                 break;
                }
             }
           }
          }
        }
      }
    }
  }
 for(let i = 0; i < arr.length; i++) {
      arr[i].sort();
 }
  res(arr);
  function res(arr) {
     arr.sort();
    for(let i = 0; i < arr.length; i++) {
      for(let j = 1+i; j < arr.length; j++) {
       if(arr[i][0]===arr[j][0] && arr[i][1]===arr[j][1] && arr[i][2]===arr[j][2]){
         arr.splice(i,1);
         res(arr);
       } else break;      
    }
   }
  }
  let result = arr.filter(function(bigItem, pos) {
    let uniqueArray = bigItem.filter(function(item, pos) {
        return bigItem.indexOf(item) == pos;
     })
    return uniqueArray.length>2;
 })
 return result.length; 
};

