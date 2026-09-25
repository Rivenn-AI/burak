//Mit task_N
function palindrom(a: any) {
  let word = a;
  let reverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
    if (word === reverse) {
      return true;
    }
    return false;
  }
}
console.log(palindrom("olma"));

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
