import { application } from "express";

console.log("hello world");

// TASK-G:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va
// function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

//

// function getHighestIndex(arr: number[]): number {
//   if (arr.length === 0) {
//     // Agar array bo'sh bo'lsa -1 qaytaramiz (masalan, array yo'q)
//     return -1;
//   }

//   let highestIndex = 0;
//   let highestValue = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > highestValue) {
//       highestValue = arr[i];
//       highestIndex = i;
//     }
//   }

//   return highestIndex;
// }

// Test qilish
// const result = getHighestIndex([5, 1, 12, 21, 8]);
// console.log(result); // Natija: 1

console.log("TASK-H");

// Task H:

// Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
// MASALAN: gerReverse("hello") return qiladi "olleh"

// function gerReverse(str: string): string {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }
//   return reversedStr;
// }

// const resultGer = gerReverse("Hello World!");
// console.log(resultGer); // natijasi: !dlroW olleH

console.log("TASK-H");

// Task H:

// Shunday function tuzing, u string qabul qilib teskari qilib return qilsin
// MASALAN: gerReverse("hello") return qiladi "olleh"

function gerReverse(str: string): string {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

const resultGer = gerReverse("Hello World!");
console.log(resultGer); // natijasi: !dlroW olleH

/* PROJECT STANDARDS:
  1. LOGGING STANDARDS:
  1.1. MORGAN PACKAGE ORQALI TERMINALDA QAYSI METHODNI ISHLATAYOTGANIMIZ,
  QAYSI URL NI ISHLATAYOTGANIMIZ VA ETC LARNI LOG QILYAPMIZ.
  1.2. BIZ RESTAURANT CONTROLLER MODULE LIDAGI PAGE LARNI HAM TERMINALDA LOG QILIB OLYAPMIZ.
   SHULAR LOGGING STANDARDSGA MISOL BO`LAOLADI;
   2. NAMING STANDARDS:
   2.1. MISOL RESTAURANT CONTROLLER MODULE LIDA GOHOME METHODINI NOMLAB OLISHIMIZ 
   CAMEL CASE STANDARTI ORQALI AMALGA OSHIRILDI;
   BIZNING STANDARTLARIMIZ BO`YICHA, FUNCTION, METHOD, VARIABLE LARNI NOMLARINI 
   CAMAL CASE ORQALI NOMLAB BORAMIZ;
   2.2. CLASS LARNI ESA BIZ PASCAL CASE STANDARTI BILAN NOMLAB BORAMIZ
   2.3. FOLDER LAR VA FILE LARNI NOMLASHDA KEBAB CASE STANDARTIDAN FOYDALANAMIZ;
   2.4. CSS NI ICHIDA ESA BIZ SNAKE CASE STANDARTIDAN FOYDALANAMIZ;
  3. ERROR HANDLING:
  */

// RESPONSE LAR NECHA XIL BO`LADI:
// 1. SEND KO`RINISHIDA BO`LADI
// 2. JSON
// 3. REDIRECT YA`NI BIRON BOSHQA URL GA YO`NALTIRILGAN BO`LADI`
// 4. END BO`LISHI MUMKIN
// 5. RENDER HAM BO`LISHI MUMKIN`

// API = APPLICATION PROGRAMMING LANGUAGE DEGANI
// API LAR SERVER VA CLIENT ORASINI BOG`LAB BERUVCHI PROTOCOL,
// PACKAGE, FUNCTION, METHODLARDAN
// FOYDALANADI.
// APILAR NI HAM TURLARI BOR:
// ENG MASHHUR TURLARI:
// 1. TRADITIONAL API, ODATDA ODDIYGINA API HAM DEB NOMLANADI,
// 2. REST API
// 3. GRAPHQL API

// Ushbu architectural va Design patternlarni yaxshi bilib olsangiz, programming
// language dan boshqa programming language ga o`tish qiyinchilik tug`dirmaydi.
// Architectural pattern:
// 1. Backend: MVC (model view controller), DI (Dependency  Injection),
// 2. Frontend: MVP (Modal view presenter)
//  Design patterns: Middleware, Decorator

// Architectural pattern, bu backend yoki frontend ni qurib beruvchi suyagi bo`ladi. Backend da ma`lumotlar oqimini
// tartibga soluvchi vosita, arxitekturasi hisoblanadi.
// Design pattern: bu backend da ma`lum bir bo`laklarni strukturasini yechishda xizmat qiladigan
// vositalar. Design pattern hisoblanadi.

console.log("TASK-H");

// Task H:

// shunday function tuzing, u integerlardan iborat
// arrayni argument sifatida qabul qilib, faqat positive
// qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(arr: number[]): string {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i].toString();
    }
  }
  return result;
}
console.log(getPositive([1, -4, 2, 21])); // "12"

// I-TASK:

// Shunday function tuzing, unga string argument pass bolsin.
// Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(str: string): string {
  let res = "";
  for (const symbol of str) {
    if (/^[0-9]+$/.test(symbol)) {
      res += symbol;
    }
  }
  return res;
}
console.log(getDigits("m14i1t")); // "141"

// J-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

function findLongestWord(s: string): string {
  const words = s.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("I come from Uzbekistan")); //  "Uzbekistan"

// K-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;
function countVowels(str: string | any[]) {
  let vowels = "aeiouAEIOU";
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result++;
    }
  }
  return result;
}

console.log(countVowels("Hello World!")); // 3
console.log(countVowels("The quick brown fox jumps over the lazy dog")); // 11

// L-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma
// sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

function reverseWords(sentence: string) {
  const words = sentence.split(" ");
  const reversedWords = words
    .map((word: string) => word.split("").reverse().join(""))
    .join("    ");
  return reversedWords;
}

const reversedWords = reverseWords("SHO`PIR MANZILGA ESON OMON YETVOLAMIZMI?!");
console.log(reversedWords);
