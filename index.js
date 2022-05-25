// code your solution here

function superbowlWin(array) {
   let obj = array.find(element => element.result === `W`); 
   console.log(obj);
   if(obj !== undefined){
     return obj.year;
   } else {
     return obj; 
   }
 }
