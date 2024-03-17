// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham,
// orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

function palindromCheck(str: string): boolean {
  const reversedStr: string = str.split("").reverse().join("");
  return str === reversedStr;
}

// Test cases
console.log(palindromCheck("dad")); // Output: true
console.log(palindromCheck("son")); // Output: false
