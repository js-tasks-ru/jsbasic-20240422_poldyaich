function filterRange(arr, a, b) {
  let result = [];
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= min && arr[i] <= max) {
      result.push(arr[i]);
    }
  }
  return result;
}
