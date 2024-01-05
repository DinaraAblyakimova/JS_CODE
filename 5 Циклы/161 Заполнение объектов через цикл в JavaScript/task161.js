console.log('task1');
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];

let obj = {};
for (let i = 0; i < arr1.length; i++) {
	obj[arr1[i]] = arr2[i];
}
console.log(obj);


console.log('task2');
obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let k = []
for (let key in obj){
    if ( obj[key] % 2 == 0){
        k[key] = obj[key];
    }
}
console.log(k);



console.log('task3');
obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let Nobj = {};

for (let key in obj) {
    Nobj[obj[key]] = key;
}
  
console.log(Nobj);