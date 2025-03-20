// Define the character set
const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // TODO: we can potentially remove 0 or O as they have duplicate removal in the backend

// Calculate total possible combinations
export const totalCombinations = Math.pow(charset.length, 4);
// console.log(`Total possible 4-character strings: ${totalCombinations.toLocaleString()}`);

// Function to generate a specific string by index
export function generateStringByIndex(index) {
  let result = '';
  let remaining = index;
  
  for (let i = 0; i < 4; i++) {
    const charIndex = remaining % charset.length;
    result = charset[charIndex] + result;
    remaining = Math.floor(remaining / charset.length);
  }
  
  return result;
}