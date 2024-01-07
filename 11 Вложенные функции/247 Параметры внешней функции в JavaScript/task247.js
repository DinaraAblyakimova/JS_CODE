function test(num1, num2) {
	function func() {
		console.log(num1 + num2);
	}
	
	func();
}

test(1, 2); //3





function test2(num1, num2) {
	function func2() {
		console.log(num1 + num2);
	}
	
	num1 = 2;
	func2();
}

test2(1, 2); //4