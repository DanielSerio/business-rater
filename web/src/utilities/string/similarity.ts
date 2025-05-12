/**
 * Calculates the similarity between two strings based on the number of common bigrams they share.
 * @param {string} str1 - first string to test.
 * @param {string} str2 - second string to test.
 * @returns number - similarity
 */
export function getSimilarity(str1: string, str2: string): number {
  const bigrams1 = new Set();
  const bigrams2 = new Set();
  let intersectionSize = 0;

  for (let i = 0; i < str1.length - 1; i += 1) {
    bigrams1.add(str1.substring(i, i + 2));
  }

  for (let i = 0; i < str2.length - 1; i += 1) {
    bigrams2.add(str2.substring(i, i + 2));
  }

  for (const bigram of bigrams1) {
    if (bigrams2.has(bigram)) {
      intersectionSize++;
    }
  }

  return (2 * intersectionSize) / (bigrams1.size + bigrams2.size);
}