const closestPairDiff = (arr, target) => {
  // escribe aqui tu código!
  const sortedArr = arr.toSorted();
  function search(arr, target, bounds) {
    if (bounds.left >= bounds.right) {
      return bounds.min_diff;
    }
    const diff =  (arr[bounds.left] + arr[bounds.right]) - target;
    bounds.min_diff = ((isNaN(bounds.min_diff))? Math.abs(diff):Math.min(bounds.min_diff, Math.abs(diff)));
    if (bounds.min_diff === 0) {
      return bounds.min_diff;
    } else if (diff > 0) {
      bounds.right -= 1;
    } else {
      bounds.left += 1;
    }
    return search(arr, target, bounds);
  }
  return search(sortedArr, target, {
                                       left: 0,
                                       right: arr.length - 1,
                                       min_diff: NaN
                                    });
};

// tests
console.log(closestPairDiff([3, 8, 12, 5, 1], 15)); // output: 0
console.log(closestPairDiff([2, 9, 14, 7], 20)); // output: 1
console.log(closestPairDiff([-10, -5, 0, 5, 10], 3)); // output: 2
console.log(closestPairDiff([1, 1, 1, 1, 1], 100)); // output: 98
