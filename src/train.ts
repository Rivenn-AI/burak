//MIT task_M
function kvadrat(number: any) {
  let result = [];
  for (let i = 0; i < number.length; i++) {
    result.push({
      number: number[i],
      square: number[i] * number[i],
    });
  }
  return result;
}
console.log(kvadrat([3, 5, 9]));
