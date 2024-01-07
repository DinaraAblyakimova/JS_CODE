function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}

test(); //1


function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
}

test(); //ничего




function test() {
	let num = 1;
	
	function func() {
		console.log(num);
	}
	
	func();
}
// ничего









function test() {
	let num;
	
	function func() {
		console.log(num);
	}
	
	num = 1
	func();
	
	num = 2
	func();
}

test(); //1 2