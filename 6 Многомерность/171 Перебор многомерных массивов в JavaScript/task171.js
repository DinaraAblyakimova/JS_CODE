let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let subArr of arr) {
	for (let elem of subArr) {
        sum += elem;
	}
}
console.log(sum);


arr = [
    [
        [1, 2], [3, 4]
    ], 
    [
        [5, 6], [7, 8]
    ]
];
summ = 0;
for (let subArr of arr) {
	for (let x of subArr) {
        for (let elem of x)
        summ += elem;
	}
}
console.log(summ);