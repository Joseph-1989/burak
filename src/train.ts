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
