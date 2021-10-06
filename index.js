//1
// function absoluteValue(num){
//   if( num > 0){
//     return num;
//   }else if (num < 0){
//     return num * -1;
//   }else
//     return "null";
//}
console.log(absoluteValue("13"))


function absoluteValue(num){   
  if (typeof num === "number"){
      if(num < 0){
        return num * -1
        }else{
        return num
        }
  }else{
     return null
  }
  
}
//bonus
function multiplesOfFourAndSix(){
  for(let i = 0; i <= 100; i++){
    if(i % 4 ==0 || i % 6 ==0){
        console.log(i);
    }
 }
}
//multiplesOfFourAndSix()