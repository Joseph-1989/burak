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
