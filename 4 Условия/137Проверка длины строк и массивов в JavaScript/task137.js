let arr = '123';
let a = 0;
let sum = 0;

if (arr.length === 3) {
  for (let i = 0; i < arr.length; i++) {
    a = Number(arr[i]);
    sum = sum + a;
  }
  console.log(sum);
}