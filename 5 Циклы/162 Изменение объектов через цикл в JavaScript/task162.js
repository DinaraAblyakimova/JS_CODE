console.log('task1');
let obj = {x: 1, y: 2, z: 3};

for ( let i in obj){
    obj[i] **=  2;
}
console.log(obj)


console.log('task2');
obj = {x: 1, y: 2, z: 3};
for ( let i in obj){
    obj[i] +=  1;
}
console.log(obj)