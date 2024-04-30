function sumSalary(obj) {
  let total = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number" && isFinite(obj[key])) {
      total = total + obj[key];
    }
  }
  return total;
}
