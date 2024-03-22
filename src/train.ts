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

// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

function objectToArray(obj: { [key: string]: any }) {
  let arr = [];
  for (let key in obj) {
    console.log(`Key is ${key}, Value is ${obj[key]}`);
    arr.push([key, obj[key]]);
  }
  // Return the array of pairs
  return arr;
}

console.log(objectToArray({ name: "John", age: 30 }));
