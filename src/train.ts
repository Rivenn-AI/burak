//Mit task_O
function addNumbers(str: any[]) {
  let sum = 0;
  str.forEach((value) => {
    if (typeof value === "number") {
      sum += value;
    }
  });
  return sum;
}
console.log(addNumbers([20, "15", { age: 10 }, 4]));
/**  PROJECT STANDARDS:
 - Logging standarts
 - Naming standarts
   function, method variables--- camel case goHome
   class => pascal                     MemberService
   folder => KEBAB
   css => SNAKE                        button-style
 - error handiling  
**/
/**  
 Traditional Api
 Rest Api
 GraphQl Api 
 **/

//Mit task_N
// function palindrom(a: any) {
//   let word = a;
//   let reverse = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     reverse += word[i];
//     if (word === reverse) {
//       return true;
//     }
//     return false;
//   }
// }
// console.log(palindrom("olma"));

//MIT task_M
// function kvadrat(number: any) {
//   let result = [];
//   for (let i = 0; i < number.length; i++) {
//     result.push({
//       number: number[i],
//       square: number[i] * number[i],
//     });
//   }
//   return result;
// }
// console.log(kvadrat([3, 5, 9]));
