// task 1
let obj = {x: 1, y: 2, z: 3};
console.log('ключи:'); 
for (let key in obj) {
	console.log(key); 
}
console.log('элементы:'); 
// task 2
for (let key in obj) {
	console.log(obj[key]); 
}