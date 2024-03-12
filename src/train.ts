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
