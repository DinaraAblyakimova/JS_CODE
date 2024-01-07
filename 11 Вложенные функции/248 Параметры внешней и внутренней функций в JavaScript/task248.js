function test(num) {
	function func(localNum) {
		console.log(localNum);
	}
	
	func(num);
}

test(1); //1


function test2(num) {
	function func2(localNum) {
		console.log(localNum);
	}
	
	func2(num + 1);
}

test2(1); //2


function test(num) {
	function func(localNum) {
		console.log(num);
	}
	
	func(num + 1);
}

test(1); //1


function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(num);
}

test(1); //1


function test(num) {
	function func(localNum) {
		localNum = 2;
	}
	
	func(num);
	console.log(localNum); //не объявлена
}

test(1); //ошибка


function test(num) {
	function func(localNum) {
		num = 2;
	}
	
	func(num);
	console.log(num);
}

test(1); //2