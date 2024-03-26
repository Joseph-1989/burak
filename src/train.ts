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

// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin.
// String "1+2" holatda pass qilinganda string ichidagi sonlar
//  yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

function calculate(str: string): number {
  return eval(str);
}

console.log(calculate("1+2")); //returns 3
console.log(calculate("10-3")); //returns 7
console.log(calculate("2*4")); //returns 8
console.log(calculate("5/2")); //returns 2.5
console.log(calculate("1 + 2 * 3")); //returns 7
console.log(calculate("(3 + 4) * 2")); //returns 14
console.log(calculate("2 ** 3")); //returns 8
console.log(calculate("12 % 5")); //returns 2
console.log(calculate("2 + 2 * (2 + 1)")); //returns 6
