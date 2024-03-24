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

// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

function hasProperty(obj: { [key: string]: any }, prop: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // Output: true

class Car {
  constructor(public brand: string, public model: string) {}
}

const myCar = new Car("Audi", "A8");
console.log(hasProperty(myCar, "brand")); // Output: true
