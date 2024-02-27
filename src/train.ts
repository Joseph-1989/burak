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
