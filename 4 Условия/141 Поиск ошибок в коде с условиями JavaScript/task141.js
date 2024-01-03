//task1
let num1 = 1;
let num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}

//task 2
let num3 = '1';
let num4 = '2';

if (Number(num3) + Number(num4) === 3) {
	console.log('+++');
} else {
	console.log('---');
}

// task 3
let num5 = '1';
let num6 = '2';

if (Number(num5) + Number(num6) === 3) {
	console.log('+++');
} else {
	console.log('---');
}


// task 4
let num = 123;
let str = String(num);

if (str[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}

// task 5
let num_1 = 123;
let str_1 = String(num_1);

if (Number(str_1[0]) === 1) {
	console.log('+++');
} else {
	console.log('---');
}

// task 6
let num_2 = 123;

if (String(num_2)[0] == 1) {
	console.log('+++');
} else {
	console.log('---');
}




// task 7
let num_3 = 123;
let first = String(num_3)[0];

if (first == 1) {
	console.log('+++');
} else {
	console.log('---');
}

// task 8
let num_4 = 12;
let str_4 = String(num_4);

if (str_4.length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

// task 9
let num_5 = 12;
let str_5 = String(num_5);

if (Number(str_5.length) === 2) {
	console.log('+++');
} else {
	console.log('---');
}

// task 10
let num_6 = 12;

if (String(num_6).length === 2) {
 console.log('+++');
} else {
 console.log('---');
}


// task 11
let num_7 = 12;

if (String(num_7).length == 2) {
	console.log('+++');
} else {
	console.log('---');
}

// task 12
let num_8 = 12;

if (String(num_8).length === 2) {
	console.log('+++');
} else {
	console.log('---');
}


// task 13
let num_9 = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = Number(num_9[0]) + Number(num_9[1]) + Number(num_9[2]);
let sum2 = Number(num_9[3]) + Number(num_9[4]) + Number(num_9[5]);

if (sum1 == sum2) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
}