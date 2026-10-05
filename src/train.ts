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

/** 
    Traditional FD => BSSR (Admin) => EJS
    MOdern FD => SPA => REACT (Users) 
    
    
    // send | render | redirect | json
    
    
    Coocies bu   yopshib oladi
    self destroy
    **/

//mit task-R
function calculate(a: string) {
  const numbers = a.split(/[+\-*\/]/);
  numbers[0];
  numbers[1];
  const first = Number(numbers[0]);
  const second = Number(numbers[1]);
  return first + second;
}
console.log(calculate("3*5"));
//Mit task_Q
// function hasProperty(object: object, property: string) {
//   if (property in object) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(hasProperty({ name: "Audi", model: "M3" }, "year"));
// Mit task_P
// function objecToArray(obj: any) {
//   return Object.entries(obj);
// }
// console.log(objecToArray({ a: 10, b: 23 }));
//Mit task_O
// function addNumbers(str: any[]) {
//   let sum = 0;
//   str.forEach((value) => {
//     if (typeof value === "number") {
//       sum += value;
//     }
//   });
//   return sum;
// }
// console.log(addNumbers([20, "15", { age: 10 }, 4]));

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
