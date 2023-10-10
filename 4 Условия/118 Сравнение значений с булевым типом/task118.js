//Задние 1 
//false: undefined, null, 0, -0, NaN, "".

//Задние 2
let test = 1;
		
if (test == true) {
	console.log('+++'); // это сработает
} else {
	console.log('---');
}

//Задние 3
let test1 = 0;
		
if (test1 == true) {
	console.log('+++');
} else {
	console.log('---'); //это сработает 
}


//Задние 4
let test2 = 1;
		
if (test2 == false) {
	console.log('+++');
} else {
	console.log('---'); // это сработает 
}


//Задние 5
let test3 = 1;
		
if ( test3 != true) {
	console.log('+++');
} else {
	console.log('---'); //это сработает 
}


//Задние 6
let test4 = '';
		
if (test4 == false) {
	console.log('+++'); // это сработает 
} else {
	console.log('---');
}

//Задние 7
let test5;
		
if (test5 == true) {
	console.log('+++');
} else {
	console.log('---'); // это сработает 
}

//Задние 8
let test6 = 3 * 'a';
		
if (test6 == true) {
	console.log('+++');
} else {
	console.log('---'); // это сработает 
}