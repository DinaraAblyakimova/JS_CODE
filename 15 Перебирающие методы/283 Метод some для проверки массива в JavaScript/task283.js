//1
let arr = [0, 4, 6, 8];

let result = arr.some(elem => elem > 0);
console.log(result);

//2
let arr2 = [2, 4, 6, 8];

let result2 = arr2.some(function(elem, index) {
	return elem * (index + 1) > 30;
});

console.log(result2);