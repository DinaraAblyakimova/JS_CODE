for (let i = 10; i <= 100; i++) {
	let str = String(i); // преобразуем число в строку
		console.log(str[0]);
}
console.log('task2');
for (let i = 10; i <= 100; i++) {
	let str = String(i); // преобразуем число в строку
		console.log(Number(str[0]) + Number(str[1]));
}


console.log('task3');
for (let i = 10; i <= 1000; i++) {
	let str = String(i);
    if (str[0] == '1')
		console.log(str);
}


console.log('task4');
for (let i = 10; i <= 1000; i++) {
	let str = String(i);
    if (Number(str[0]) + Number(str[1]) == 5)
		console.log(str);
}