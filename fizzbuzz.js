module.exports = function () {

  const FizzBuzz = [];

  for (i = 1; i<101; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
      FizzBuzz.push('FizzBuzz')
    } 
    else if (i % 3 == 0){
      FizzBuzz.push('Fizz')
    }
    else if (i % 5 == 0)
    {
      FizzBuzz.push('Buzz')
    } 
    else { 
      FizzBuzz.push(i);
    }
  }
  return FizzBuzz;
}

// function test(){
//   const FizzBuzz = [];

//   for (i = 1; i<101; i++) {

//     if (i % 3 == 0 && i % 5 == 0) {
//       FizzBuzz.push('FizzBuzz')
//     } 
//     else if (i % 3 == 0){
//       FizzBuzz.push('Fizz')
//     }
//     else if (i % 5 == 0)
//     {
//       FizzBuzz.push('Buzz')
//     } 
//     else { 
//       FizzBuzz.push(i);
//     }
//   }
//   return FizzBuzz;
// }

// console.log(test());
