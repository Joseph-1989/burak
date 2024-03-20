/* Project Standards:
- Logging standards
- Naming standards:
                   function, method, variable = CAMEL
                   class => PASCAL
                   folder, file => KEBAB CSS => SNAKE
- Error handling
*/

/* Request:
Traditinal Api
Rest Api
GraphQL Api
*/

/* Frontend Development:
Traditional FD => BSSR => EJS 
Modern FD  => SPA => REACT
*/

/* Backend Development:
Traditional BD
0）
Modern BD

/* Cookies:
request join
 self destroy
/* 

Validation:
Frontend validation
Backend validation
Database validation
*/

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin
// va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45    ;

function calculateSumOfNumbers(arr: Array<any>): number {
  //Filter out non-numeric values and convert the rest to numbers
  const numbers = arr
    .filter((val) => typeof val === "number")
    .map((val) => Number(val));

  //Calculate the sum of the numbers
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  //Return the sum
  return sum;
}

//Example usage:
console.log(
  calculateSumOfNumbers([
    10,
    "10",
    { son: 10 },
    true,
    35,
    false,
    { raqam: 20 },
    100,
    null,
    1,
  ])
);
