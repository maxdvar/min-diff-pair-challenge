const closestPairDiff = (arr, target) => {
  return arr.flatMap((a, i) =>
    arr.slice(i + 1).map(b => Math.abs(a + b - target))
  ).reduce((minDiff, currDiff) =>
    Math.min(minDiff, currDiff)
  );
};

// tests
console.log(closestPairDiff([3, 8, 12, 5, 1], 15)); // output: 0
console.log(closestPairDiff([2, 9, 14, 7], 20)); // output: 1
console.log(closestPairDiff([-10, -5, 0, 5, 10], 3)); // output: 2
console.log(closestPairDiff([1, 1, 1, 1, 1], 100)); // output: 98
