let arr = [];

for (let i = 1; i <= 10; i++) {
	arr.push(i);
}

console.log(arr);

arr = [];

for (let i = 1; i <= 10; i++) {
	arr.push('x');
}

console.log(arr);


arr = [1, 2, 3, 4, -1, -5];
let arr1 = [];
for (let elem of arr) {
    if (elem >= 0){
	    arr1.push(elem);
    }
}
console.log(arr1);