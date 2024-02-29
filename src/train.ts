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
