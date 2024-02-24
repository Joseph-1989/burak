console.log("hello world");

// TASK-G:

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va
// function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

//

function getHighestIndex(arr: number[]): number {
  if (arr.length === 0) {
    // Agar array bo'sh bo'lsa -1 qaytaramiz (masalan, array yo'q)
    return -1;
  }

  let highestIndex = 0;
  let highestValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highestValue) {
      highestValue = arr[i];
      highestIndex = i;
    }
  }

  return highestIndex;
}

// Test qilish
const result = getHighestIndex([5, 1, 12, 21, 8]);
console.log(result); // Natija: 1
