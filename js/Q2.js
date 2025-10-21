const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const getMax = (array) => {
  const max = array.reduce((a, b) => {
    return Math.max(a, b);
  }, 0);
  return max;
};
console.log(getMax(arr));
console.log(" ");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(" ");

for (let i in arr) {
  console.log(arr[i]);
}
console.log(" ");

for (let element of arr) {
  console.log(element);
}
